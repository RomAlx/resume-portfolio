<template>
  <section id="projects" data-section="projects" class="py-5 relative">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-secondary/5"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Ключевые проекты
        </h2>
        <p class="text-xl">
          Практический опыт и измеримые результаты
        </p>
      </div>

      <!-- Project Navigation -->
      <div class="flex justify-center space-x-4 mb-8">
        <n-button
            v-for="(project, index) in projects"
            :key="index"
            :type="selectedProject === index ? 'primary' : 'default'"
            :ghost="selectedProject !== index"
            size="medium"
            class="rounded-xl"
            @click="selectProject(index)"
        >
          {{ project.shortName || `Проект ${index + 1}` }}
        </n-button>
      </div>

      <!-- Projects Content -->
      <div class="mb-12">
        <n-card
            :bordered="true"
            class="bg-transparent backdrop-blur-3xl shadow-2xl group hover:shadow-3xl transition-all duration-500"
        >
          <template #header>
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
              <div class="flex items-start space-x-4 flex-1">
                <n-avatar
                    v-if="currentProject.logo"
                    :size="72"
                    :src="currentProject.logo"
                    class="border-2 border-primary/20 shadow-lg flex-shrink-0 group-hover:border-primary/40 transition-colors"
                />
                <div class="flex-1 min-w-0">
                  <h3 class="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                    {{ currentProject.name }}
                  </h3>
                  <n-tag type="primary" size="large" :bordered="false" class="rounded-xl font-medium">
                    {{ currentProject.role }}
                  </n-tag>
                </div>
              </div>
            </div>
          </template>

          <div class="space-y-8">
            <!-- Project Description -->
            <div class="p-2 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
              <p class="text-lg leading-relaxed">
                {{ currentProject.description }}
              </p>
            </div>

            <!-- Metrics Grid -->
            <div v-if="currentProject.metrics" class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                  v-for="metric in currentProject.metrics"
                  :key="metric.label"
                  class="text-center p-4 rounded-xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:scale-105 "
              >
                <div class="text-2xl font-bold text-primary mb-1">
                  {{ metric.value }}{{ metric.suffix }}
                </div>
                <div class="text-sm font-medium opacity-70">
                  {{ metric.label }}
                </div>
              </div>
            </div>

            <!-- Tech Stack Accordion -->
            <n-collapse :default-expanded-names="['tech']">
              <n-collapse-item title="Технологический стек" name="tech">
                <template #header-extra>
                  <n-icon size="18" class="text-warning">
                    <CodeSlashSharp />
                  </n-icon>
                </template>

                <div class="flex flex-wrap gap-3">
                  <n-tag
                      v-for="tech in currentProject.technologies"
                      :key="tech"
                      type="info"
                      size="medium"
                      :bordered="false"
                      class="rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-200"
                  >
                    {{ tech }}
                  </n-tag>
                </div>
              </n-collapse-item>
            </n-collapse>

            <!-- Features Accordion -->
            <n-collapse v-if="currentProject.features?.length">
              <n-collapse-item :title="currentProject.featuresTitle || 'Ключевые возможности'" name="features">
                <template #header-extra>
                  <n-icon size="18" class="text-success">
                    <CheckmarkCircleSharp />
                  </n-icon>
                </template>

                <div class="grid md:grid-cols-2 gap-4">
                  <div
                      v-for="(feature, featureIndex) in currentProject.features"
                      :key="featureIndex"
                      class="flex items-start space-x-3 p-4 rounded-xl bg-success/5 hover:bg-success/10 transition-colors"
                  >
                    <n-icon size="16" class="text-success mt-0.5 flex-shrink-0">
                      <CheckmarkSharp />
                    </n-icon>
                    <span class="flex-1 text-sm">{{ feature }}</span>
                  </div>
                </div>
              </n-collapse-item>
            </n-collapse>

            <!-- Business Result -->
            <n-alert
                v-if="currentProject.businessResult"
                type="success"
                :show-icon="false"
                class=""
            >
              <template #header>
                <div class="flex items-center space-x-3">
                  <span class="text-lg font-semibold">Бизнес-результат</span>
                </div>
              </template>
              <p class="text-base mt-2">{{ currentProject.businessResult }}</p>
            </n-alert>

            <!-- Project Navigation Arrows -->
            <div class="flex justify-between items-center pt-4">
              <n-button
                  :disabled="selectedProject === 0"
                  @click="selectProject(selectedProject - 1)"
                  circle
                  size="large"
                  class="shadow-lg"
              >
                <template #icon>
                  <n-icon size="20">
                    <ChevronBackSharp />
                  </n-icon>
                </template>
              </n-button>

              <div class="flex space-x-2">
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    :class="[
                      'w-3 h-3 rounded-full transition-all duration-300 cursor-pointer',
                      selectedProject === index
                        ? 'bg-primary shadow-lg scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    ]"
                    @click="selectProject(index)"
                />
              </div>

              <n-button
                  :disabled="selectedProject === projects.length - 1"
                  @click="selectProject(selectedProject + 1)"
                  circle
                  size="large"
                  class="shadow-lg"
              >
                <template #icon>
                  <n-icon size="20">
                    <ChevronForwardSharp />
                  </n-icon>
                </template>
              </n-button>
            </div>
          </div>
        </n-card>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import {
  LayersSharp,
  CheckmarkSharp,
  CheckmarkCircleSharp,
  TrophySharp,
  RocketSharp,
  CodeSlashSharp,
  MailSharp,
  LogoGithub,
  ChevronBackSharp,
  ChevronForwardSharp
} from '@vicons/ionicons5'

// Импорт логотипов
import dayoffLogo from '@/assets/images/logos/dayoff-logo.png'
import trendsyLogo from '@/assets/images/logos/trendsy-logo.png'

export default defineComponent({
  name: 'ProjectsSection',
  components: {
    LayersSharp,
    CheckmarkSharp,
    CheckmarkCircleSharp,
    TrophySharp,
    RocketSharp,
    CodeSlashSharp,
    MailSharp,
    LogoGithub,
    ChevronBackSharp,
    ChevronForwardSharp
  },
  data() {
    return {
      selectedProject: 0,
      projects: [
        {
          name: 'DayOff - Аналитическая платформа рекламных кампаний',
          shortName: 'DayOff',
          role: 'Lead Developer',
          logo: dayoffLogo,
          description: 'Полная переработка legacy системы аналитики для отслеживания эффективности рекламных кампаний с интеграцией VK и Яндекс.Директ API. Создание современной архитектуры с разделением на микросервисы и real-time аналитикой.',
          technologies: ['Laravel', 'Vue.js 3', 'MySQL', 'Redis', 'Docker', 'VK API', 'Яндекс.Директ API'],
          features: [
            'Спроектировал современную архитектуру с разделением на микросервисы',
            'Реализовал real-time аналитику с метриками CPC, CPA, CTR, конверсии',
            'Внедрил систему ролей и гибкое управление доступами',
            'Создал автоматизированную систему отчетности',
            'Настроил мониторинг и систему уведомлений',
            'Оптимизировал производительность базы данных'
          ],
          businessResult: 'Сокращение времени формирования отчетов с 2-3 часов до 1 минуты. Полная автоматизация месячной отчетности.',
          metrics: [
            { label: 'Ускорение', value: '180', suffix: 'x' },
            { label: 'Экономия времени', value: '2.5', suffix: ' ч/день' },
            { label: 'Точность данных', value: '99.9', suffix: '%' },
            { label: 'Автоматизация', value: '100', suffix: '%' }
          ]
        },
        {
          name: 'Trendsy - Игровая реферальная платформа',
          shortName: 'Trendsy',
          role: 'Fullstack Developer',
          logo: trendsyLogo,
          description: 'Telegram Mini App с комплексной системой геймификации, интеграцией TON Blockchain и многоуровневой монетизацией. Полный цикл разработки от идеи до запуска с реальными пользователями.',
          technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'TON API', 'PostHog', 'Telegram Bot API'],
          featuresTitle: 'Функциональность',
          features: [
            'Реферальная система с 10 уровнями лиг и прогрессией',
            'Интеграция с TON Wallet для криптовыплат',
            'Система заданий и достижений с геймификацией',
            'Многоязычность и адаптивный дизайн',
            'Аналитика пользовательского поведения через PostHog',
            'Геймифицированный интерфейс с плавными анимациями'
          ],
          businessResult: 'Успешный запуск MVP с монетизацией, привлечение 500+ активных пользователей, получение продуктового опыта.',
          metrics: [
            { label: 'Пользователи', value: '500', suffix: '+' },
            { label: 'Конверсия', value: '15', suffix: '%' },
            { label: 'Удержание', value: '65', suffix: '%' },
            { label: 'Языки', value: '3', suffix: '' }
          ]
        }
      ]
    }
  },
  computed: {
    currentProject() {
      return this.projects[this.selectedProject] || this.projects[0]
    }
  },
  methods: {
    selectProject(index) {
      if (index >= 0 && index < this.projects.length) {
        this.selectedProject = index
      }
    }
  }
})
</script>