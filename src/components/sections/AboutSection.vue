<template>
  <section id="about" data-section="about" class="py-5">
    <div class="max-w-6xl mx-auto px-4">

      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          О себе
        </h2>
        <n-text depth="2" class="text-xl">
          Fullstack разработчик с фокусом на создание качественных веб-приложений
        </n-text>
      </div>

      <!-- Основной контент - равномерная сетка -->
      <div class="main-grid">

        <!-- Профессиональный портрет -->
        <n-card class="profile-card bg-transparent backdrop-blur-3xl">
          <template #header>
            <div class="flex items-center gap-3">
              <n-avatar
                  size="medium"
                  :src="profilePhoto"
                  :style="avatarStyle"
              />
              <div>
                <n-text strong class="text-lg">Профессиональный портрет</n-text>
                <n-text depth="3" class="block text-sm">4+ года коммерческого опыта</n-text>
              </div>
            </div>
          </template>

          <n-blockquote>
            Fullstack разработчик с 4-летним коммерческим опытом, специализирующийся на создании
            высоконагруженных внутренних систем и современных веб-приложений. Имею успешный опыт
            технического лидерства и полного цикла разработки продуктов от MVP до масштабирования.
          </n-blockquote>
        </n-card>

        <!-- Ключевые навыки -->
        <n-card class="skills-card bg-transparent backdrop-blur-3xl">
          <template #header>
            <div class="flex items-center gap-3">
              <n-icon size="20" class="text-green-500">
                <StarSharp />
              </n-icon>
              <n-text strong class="text-lg">Ключевые навыки</n-text>
            </div>
          </template>

          <div class="skills-grid">
            <n-tag
                v-for="skill in skills"
                :key="skill"
                type="primary"
                round
                class="skill-tag"
            >
              {{ skill }}
            </n-tag>
          </div>
        </n-card>

        <!-- Достижения -->
        <n-card class="achievements-card  bg-transparent backdrop-blur-3xl">
          <template #header>
            <div class="flex items-center gap-3">
              <n-text strong class="text-lg">Достижения</n-text>
            </div>
          </template>

          <n-list class=" bg-transparent backdrop-blur-3xl">
            <n-list-item v-for="achievement in achievements" :key="achievement.title">
              <n-thing
                  :title="achievement.title"
                  :description="achievement.description"
              />
            </n-list-item>
          </n-list>
        </n-card>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue'
import {
  PersonSharp,
  StarSharp,
  TrophySharp,
  CheckmarkSharp,
  BriefcaseSharp,
  CodeSlashSharp,
  RocketSharp
} from '@vicons/ionicons5'
import { useThemeStore } from '@/stores/theme'
import profilePhoto from '@/assets/images/profile-photo.jpeg'

export default defineComponent({
  name: 'AboutSection',
  components: {
    PersonSharp,
    StarSharp,
    TrophySharp,
    CheckmarkSharp,
    BriefcaseSharp,
    CodeSlashSharp,
    RocketSharp
  },
  setup() {
    const themeStore = useThemeStore()

    // Стили для аватаров
    const avatarStyle = computed(() => ({
      background: `linear-gradient(45deg, ${themeStore.currentThemeOverrides.common.primaryColor}, ${themeStore.currentThemeOverrides.common.secondaryColor})`
    }))

    const successAvatarStyle = computed(() => ({
      background: `linear-gradient(45deg, ${themeStore.currentThemeOverrides.common.successColor}, ${themeStore.currentThemeOverrides.common.primaryColor})`
    }))

    // Данные
    const skills = [
      'JavaScript/Vue.js',
      'PHP/Laravel',
      'Python',
      'API интеграции',
      'Оптимизация',
      'DevOps'
    ]

    const achievements = [
      {
        title: 'Ускорение системы в 180 раз',
        description: 'Оптимизировал аналитическую платформу, сократив время отчетов с 2-3 часов до 1 минуты'
      },
      {
        title: 'Запуск 2 стартапов',
        description: 'Создал и запустил два коммерческих продукта с нуля до работающего MVP'
      },
      {
        title: 'Внедрение DevOps практик',
        description: 'Настроил CI/CD, Docker, мониторинг и автоматизировал процессы разработки'
      },
      {
        title: 'Техническое лидерство',
        description: 'Опыт руководства командой разработки и принятия архитектурных решений'
      }
    ]

    return {
      avatarStyle,
      successAvatarStyle,
      skills,
      achievements,
      profilePhoto
    }
  }
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #00C851, #4CAF50);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Основная сетка - равномерное распределение */
.main-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 0.5rem 1.5rem;
  min-height: 70vh;
}

/* Профессиональный портрет - занимает 2/3 ширины на больших экранах */
.profile-card {
  grid-column: 1 / 9;
  grid-row: 1;
  display: flex;
  flex-direction: column;
}

/* Ключевые навыки - занимает 1/3 ширины */
.skills-card {
  grid-column: 9 / 13;
  grid-row: 1;
  display: flex;
  flex-direction: column;
}

/* Статистика - занимает всю ширину во второй строке */
.stats-grid {
  grid-column: 1 / 13;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

/* Достижения - занимают всю ширину в третьей строке */
.achievements-card {
  grid-column: 1 / 13;
  grid-row: 3;
  display: flex;
  flex-direction: column;
}

/* Сетка навыков */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  flex-grow: 1;
  align-content: start;
}

.skill-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  min-height: 2.5rem;
}

/* Карточки статистики */
.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 120px;
}

/* Адаптивность для планшетов */
@media (max-width: 1024px) {
  .main-grid {
    grid-template-columns: repeat(8, 1fr);
    min-height: auto;
  }

  .profile-card {
    grid-column: 1 / 9;
    grid-row: 1;
  }

  .skills-card {
    grid-column: 1 / 9;
    grid-row: 2;
  }

  .stats-grid {
    grid-column: 1 / 9;
    grid-row: 3;
    grid-template-columns: repeat(2, 1fr);
  }

  .achievements-card {
    grid-column: 1 / 9;
    grid-row: 4;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .profile-card,
  .skills-card,
  .stats-grid,
  .achievements-card {
    grid-column: 1;
  }

  .profile-card {
    grid-row: 1;
  }

  .skills-card {
    grid-row: 2;
  }

  .stats-grid {
    grid-row: 3;
    grid-template-columns: repeat(2, 1fr);
  }

  .achievements-card {
    grid-row: 4;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-tag {
    min-height: 2rem;
    padding: 0.25rem 0.75rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

/* Темная тема */
:global(.dark) .gradient-text {
  background: linear-gradient(135deg, #00E676, #66BB6A);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Дополнительные стили для лучшего заполнения */
.n-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.n-card :deep(.n-card__content) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.n-blockquote {
  flex-grow: 1;
  margin: 0;
}
</style>