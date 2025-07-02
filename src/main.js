import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';

// stores
import {useThemeStore} from './stores/theme';

import '@/assets/main.css';

// Naive UI и локализация
import {
    create,

    NButton,
    NCard,
    NInput,
    NForm,
    NFormItem,
    NMenu,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutContent,
    NLayoutFooter,
    NAvatar,
    NDropdown,
    NIcon,
    NTag,
    NDivider,
    NSpace,
    NGrid,
    NGi,
    NList,
    NListItem,
    NModal,
    NDataTable,
    NTooltip,
    NPagination,
    NTabs,
    NTabPane,
    NSelect,
    NSwitch,
    NEmpty,
    NStatistic,
    NBadge,
    NAlert,
    NProgress,
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    NLoadingBarProvider,
    NSpin,
    NDatePicker,
    NTree,
    NInputGroup,
    NCheckbox,
    NRadio,
    NRadioButton,
    NRadioGroup,
    NCheckboxGroup,
    NColorPicker,
    NCollapseTransition,
    NCollapse,
    NCollapseItem,
    NDescriptions,
    NDescriptionsItem,
    NDynamicInput,
    NDynamicTags,
    NEllipsis,
    NElement,
    NGradientText,
    NImage,
    NImageGroup,
    NInputNumber,
    NMention,
    NPageHeader,
    NPopconfirm,
    NPopover,
    NPopselect,
    NResult,
    NScrollbar,
    NSlider,
    NSteps,
    NStep,
    NTable,
    NThing,
    NTimePicker,
    NTimeline,
    NTimelineItem,
    NTransfer,
    NRow,
    NCol,
    NUpload,
    NUploadDragger,
    NUploadFileList,
    NAutoComplete,
    NCode,
    NRate,
    NAffix,
    NNumberAnimation,
    NCountdown,
    NWatermark,
    NCalendar,
    NCarousel,
    NCarouselItem,
    NCascader,
    NBreadcrumb,
    NBreadcrumbItem,
    NDrawer,
    NDrawerContent,
    NFormItemRow,
    NInputGroupLabel,
    NSkeleton,
    NBackTop, // ДОБАВЛЕНО: вы используете этот компонент в AppLayout.vue
} from 'naive-ui';

// УБРАНО: Создание дискретного API здесь, теперь это делается в theme store

// Подготавливаем список всех компонентов
const components = [
    NButton, NCard, NInput, NForm, NFormItem, NMenu, NLayout, NLayoutHeader,
    NLayoutSider, NLayoutContent, NLayoutFooter, NAvatar, NDropdown, NIcon,
    NTag, NDivider, NSpace, NGrid, NGi, NList, NListItem, NModal, NDataTable,
    NTooltip, NPagination, NTabs, NTabPane, NSelect, NSwitch, NEmpty, NStatistic,
    NBadge, NAlert, NProgress, NConfigProvider, NMessageProvider, NNotificationProvider,
    NDialogProvider, NLoadingBarProvider, NSpin, NDatePicker, NTree, NInputGroup,
    NCheckbox, NRadio, NRadioButton, NRadioGroup, NCheckboxGroup, NColorPicker, NCollapseTransition,
    NCollapse, NCollapseItem, NDescriptions, NDescriptionsItem, NDynamicInput,
    NDynamicTags, NEllipsis, NElement, NGradientText, NImage, NImageGroup, NInputNumber,
    NMention, NPageHeader, NPopconfirm, NPopover, NPopselect, NResult, NScrollbar,
    NSlider, NSteps, NStep, NTable, NThing, NTimePicker, NTimeline, NTimelineItem, NTransfer,
    NRow, NCol, NUpload, NUploadDragger, NUploadFileList, NAutoComplete, NCode, NRate,
    NAffix, NNumberAnimation, NCountdown, NWatermark, NCalendar, NCarousel,
    NCarouselItem, NCascader, NBreadcrumb, NBreadcrumbItem,
    NDrawer, NDrawerContent, NFormItemRow, NInputGroupLabel, NSkeleton, NBackTop,
];

// Create Naive UI instance with registered components
const naive = create({
    components
});

// Create app and pinia instance
const pinia = createPinia();
const app = createApp(App);

// Register plugins
app.use(naive)
    .use(pinia)
    .use(router);

// Mount the app
const appInstance = app.mount('#app');

// Provide app instance
app.provide('app', appInstance);

// Initialize theme after app mount
const initApp = () => {
    try {
        // Import and use theme store
        const themeStore = useThemeStore(pinia);

        // Initialize theme
        themeStore.initTheme();

        // Log initialization
        console.log(`Application initialized in ${themeStore.themeName} theme mode`);
    } catch (error) {
        console.error('Error initializing app:', error);
    }
};

// Initialize after DOM is fully loaded
if (document.readyState === 'complete') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}