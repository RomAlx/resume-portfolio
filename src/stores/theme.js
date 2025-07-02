// stores/theme.js
import { defineStore } from 'pinia';
import { darkTheme, createDiscreteApi } from 'naive-ui';
import { lightAppTheme, darkAppTheme } from '@/theme/preset';

/**
 * Centralized theme management store
 * Handles theme switching, persistence, and global discrete API initialization
 */
export const useThemeStore = defineStore('theme', {
    state: () => ({
        // Исправлена логика по умолчанию
        isDarkMode: localStorage.getItem('theme') === 'dark' ||
            (localStorage.getItem('theme') === null), // По умолчанию темная тема, только если нет сохраненной настройки
        discreteApiInitialized: false
    }),

    getters: {
        // ИСПРАВЛЕНО: currentTheme должен возвращать darkTheme из naive-ui, а не darkAppTheme
        currentTheme: (state) => state.isDarkMode ? darkTheme : null,
        currentThemeOverrides: (state) => state.isDarkMode ? darkAppTheme : lightAppTheme,

        // Theme name for external use
        themeName: (state) => state.isDarkMode ? 'dark' : 'light',
    },

    actions: {
        // Toggle theme
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            this.saveThemePreference();
            this.updateDiscreteApi();
        },

        // Set a specific theme
        setTheme(isDark) {
            this.isDarkMode = isDark;
            this.saveThemePreference();
            this.updateDiscreteApi();
        },

        // Save theme preference to localStorage
        saveThemePreference() {
            localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

            // Apply theme to document
            document.documentElement.classList.toggle('dark-theme', this.isDarkMode);
            document.documentElement.classList.toggle('light-theme', !this.isDarkMode);

            // Set color scheme for browsers
            document.documentElement.style.colorScheme = this.isDarkMode ? 'dark' : 'light';
        },

        // Initialize theme from localStorage
        initTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.isDarkMode = savedTheme === 'dark';
            } else {
                // Если нет сохраненной темы, используем темную по умолчанию
                this.isDarkMode = true;
            }

            // Apply initial theme
            this.saveThemePreference();

            // Initialize discrete API if not already done
            if (!this.discreteApiInitialized) {
                this.initDiscreteApi();
            }
        },

        // Initialize discrete API
        initDiscreteApi() {
            try {
                // Create API with current theme
                const { message, notification, dialog, loadingBar } = createDiscreteApi(
                    ['message', 'notification', 'dialog', 'loadingBar'],
                    {
                        configProviderProps: {
                            theme: this.currentTheme,
                            themeOverrides: this.currentThemeOverrides
                        }
                    }
                );

                // Set global references
                window.$message = message;
                window.$notification = notification;
                window.$dialog = dialog;
                window.$loading = loadingBar;

                this.discreteApiInitialized = true;
            } catch (error) {
                console.error('Error initializing discrete API:', error);
            }
        },

        // Update discrete API with current theme
        updateDiscreteApi() {
            if (!this.discreteApiInitialized) {
                this.initDiscreteApi();
                return;
            }

            try {
                // Clean up existing instances
                if (window.$message?.unmount) window.$message.unmount();
                if (window.$notification?.unmount) window.$notification.unmount();
                if (window.$dialog?.unmount) window.$dialog.unmount();
                if (window.$loading?.unmount) window.$loading.unmount();

                // Recreate with current theme
                const { message, notification, dialog, loadingBar } = createDiscreteApi(
                    ['message', 'notification', 'dialog', 'loadingBar'],
                    {
                        configProviderProps: {
                            theme: this.currentTheme,
                            themeOverrides: this.currentThemeOverrides
                        }
                    }
                );

                // Update global references
                window.$message = message;
                window.$notification = notification;
                window.$dialog = dialog;
                window.$loading = loadingBar;
            } catch (error) {
                console.error('Error updating discrete API:', error);
            }
        }
    }
});