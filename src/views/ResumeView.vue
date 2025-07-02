<template>
  <!-- Анимированный фон -->
  <div class="animated-background">
    <!-- Основные пузырьки -->
    <div
        class="bubble bubble-1"
        :style="getBubbleStyle(1)"
    ></div>
    <div
        class="bubble bubble-2"
        :style="getBubbleStyle(2)"
    ></div>
    <div
        class="bubble bubble-3"
        :style="getBubbleStyle(3)"
    ></div>
    <div
        class="bubble bubble-4"
        :style="getBubbleStyle(4)"
    ></div>
    <div
        class="bubble bubble-5"
        :style="getBubbleStyle(5)"
    ></div>
    <div
        class="bubble bubble-6"
        :style="getBubbleStyle(6)"
    ></div>
    <div
        class="bubble bubble-7"
        :style="getBubbleStyle(7)"
    ></div>
    <div
        class="bubble bubble-8"
        :style="getBubbleStyle(8)"
    ></div>
  </div>

  <!-- Контент страницы -->
  <div class="page-content">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Experience Section -->
    <ExperienceSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Education Section -->
    <EducationSection />

    <!-- Contacts Section -->
    <ContactsSection />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { useDevice } from '@/composables/useDevice.js'
import { useThemeStore } from '@/stores/theme'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ContactsSection from '@/components/sections/ContactsSection.vue'

export default defineComponent({
  name: 'ResumeView',
  components: {
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    EducationSection,
    ContactsSection
  },
  setup() {
    const { isMobile } = useDevice()
    const themeStore = useThemeStore()

    // Состояние скролла
    const scrollY = ref(0)

    // Цвета темы
    const primaryColor = themeStore.currentThemeOverrides?.common?.primaryColor || '#6366f1'
    const secondaryColor = themeStore.currentThemeOverrides?.common?.secondaryColor || '#8b5cf6'

    // Конфигурация пузырьков для эффекта параллакса
    const bubbleConfig = {
      1: {
        // Плавное движение вверх
        speed: 0.15,
        direction: 'up',
        color1: primaryColor,
        color2: secondaryColor
      },
      2: {
        // Плавное движение вниз
        speed: -0.1,
        direction: 'down',
        color1: secondaryColor,
        color2: primaryColor
      },
      3: {
        // Среднее движение вверх
        speed: 0.25,
        direction: 'up',
        color1: primaryColor,
        color2: secondaryColor
      },
      4: {
        // Очень медленное движение вверх
        speed: 0.08,
        direction: 'up',
        color1: secondaryColor,
        color2: primaryColor
      },
      5: {
        // Среднее движение вниз
        speed: -0.2,
        direction: 'down',
        color1: primaryColor,
        color2: secondaryColor
      },
      6: {
        // Новый шарик - плавное движение вверх
        speed: 0.12,
        direction: 'up',
        color1: secondaryColor,
        color2: primaryColor
      },
      7: {
        // Новый шарик - медленное движение вниз
        speed: -0.15,
        direction: 'down',
        color1: primaryColor,
        color2: secondaryColor
      },
      8: {
        // Новый шарик - очень плавное движение вверх
        speed: 0.18,
        direction: 'up',
        color1: secondaryColor,
        color2: primaryColor
      }
    }

    // Функция для получения стилей пузырька с эффектом параллакса
    const getBubbleStyle = (bubbleId) => {
      const config = bubbleConfig[bubbleId]

      // Рассчитываем смещение на основе скролла
      const offset = scrollY.value * config.speed

      return {
        background: `radial-gradient(circle at 50% 50%, ${config.color1}60, ${config.color1}30, ${config.color2}40, ${config.color2}20)`,
        transform: `translateY(${offset}px)`,
        transition: 'none' // Убираем transition для плавности скролла
      }
    }

    // Обработчик скролла
    const handleScroll = () => {
      scrollY.value = window.scrollY
    }

    // Throttle функция для оптимизации производительности
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Жизненный цикл
    onMounted(() => {
      window.addEventListener('scroll', throttledHandleScroll, { passive: true })
      // Инициализируем начальное значение
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', throttledHandleScroll)
    })

    return {
      getBubbleStyle
    }
  }
})
</script>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.page-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  will-change: transform;
}

.bubble-1 {
  top: -10%;
  right: -10%;
  width: 320px;
  height: 320px;
}

.bubble-2 {
  bottom: 20%;
  left: -15%;
  width: 400px;
  height: 400px;
  filter: blur(80px);
  opacity: 0.7;
}

.bubble-3 {
  top: 40%;
  right: 10%;
  width: 200px;
  height: 200px;
  filter: blur(45px);
  opacity: 0.5;
}

.bubble-4 {
  top: 70%;
  left: 15%;
  width: 250px;
  height: 250px;
  filter: blur(55px);
  opacity: 0.6;
}

.bubble-5 {
  bottom: -5%;
  right: 20%;
  width: 180px;
  height: 180px;
  filter: blur(40px);
  opacity: 0.5;
}

.bubble-6 {
  top: 50%;
  left: 50%;
  width: 220px;
  height: 220px;
  filter: blur(50px);
  opacity: 0.4;
}

.bubble-7 {
  top: 60%;
  right: 40%;
  width: 160px;
  height: 160px;
  filter: blur(35px);
  opacity: 0.5;
}

.bubble-8 {
  top: 45%;
  left: 20%;
  width: 280px;
  height: 280px;
  filter: blur(70px);
  opacity: 0.3;
}

/* Адаптивность */
@media (max-width: 768px) {
  .bubble-1 {
    width: 250px;
    height: 250px;
    filter: blur(50px);
  }

  .bubble-2 {
    width: 300px;
    height: 300px;
    filter: blur(65px);
  }

  .bubble-3 {
    width: 150px;
    height: 150px;
    filter: blur(35px);
  }

  .bubble-4 {
    width: 180px;
    height: 180px;
    filter: blur(45px);
  }

  .bubble-5 {
    width: 120px;
    height: 120px;
    filter: blur(30px);
  }

  .bubble-6 {
    width: 160px;
    height: 160px;
    filter: blur(40px);
  }

  .bubble-7 {
    width: 120px;
    height: 120px;
    filter: blur(25px);
  }

  .bubble-8 {
    width: 200px;
    height: 200px;
    filter: blur(55px);
  }
}

/* Темная тема */
:global(.dark) .bubble {
  opacity: 0.8;
}
</style>