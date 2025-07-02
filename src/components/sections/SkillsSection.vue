<template>
  <section id="skills" data-section="skills" class="py-5 relative">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Технические навыки
        </h2>
        <p class="text-xl">
          Современный стек технологий
        </p>
      </div>

      <!-- Skills Tabs -->
      <div class="flex justify-center mb-8">
        <n-tabs
            type="line"
            size="medium"
            animated
            :default-value="skillCategories[0].key"
        >
          <n-tab-pane
              v-for="category in skillCategories"
              :key="category.key"
              :name="category.key"
              :tab="category.title"
          >
            <template #tab>
              <div class="flex items-center space-x-2 px-2">
                <n-icon size="18">
                  <component :is="category.icon" />
                </n-icon>
                <span>{{ category.title }}</span>
              </div>
            </template>

            <!-- Category Content -->
            <div class="mt-8 space-y-8">
              <!-- Category Description -->
              <div class="text-center">
                <p class="text-lg">{{ category.description }}</p>
              </div>

              <!-- Skills Grid - Always horizontal centered layout -->
              <div class="flex justify-center">
                <div class="flex flex-wrap justify-center gap-6 max-w-5xl">
                  <div
                      v-for="(skillGroup, index) in category.skills"
                      :key="index"
                      class="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <n-card
                        :bordered="true"
                        class="bg-transparent backdrop-blur-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-95 group h-full"
                    >
                      <template #header>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                              <n-icon size="18" color="white">
                                <component :is="skillGroup.iconComponent || 'CodeSlashSharp'" />
                              </n-icon>
                            </div>
                            <div>
                              <h3 class="text-lg font-semibold ">{{ skillGroup.name }}</h3>
                              <p class="text-sm">{{ skillGroup.description }}</p>
                            </div>
                          </div>
                        </div>
                      </template>

                      <div class="space-y-4">
                        <!-- Skills tags -->
                        <div class="flex flex-wrap gap-2">
                          <n-tag
                              v-for="(skill, skillIndex) in skillGroup.items"
                              :key="skill"
                              :type="getTagType(category.key)"
                              size="medium"
                              :bordered="false"
                              class="rounded-lg hover:scale-105 transition-transform duration-200"
                              :style="{ animationDelay: `${skillIndex * 50}ms` }"
                          >
                            {{ skill }}
                          </n-tag>
                        </div>
                      </div>
                    </n-card>
                  </div>
                </div>
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import {
  CodeSlashSharp,
  ServerSharp,
  BuildSharp,
  CheckboxSharp,
  SettingsSharp,
  AlbumsSharp,
  CloudSharp,
  BugSharp,
  RocketSharp,
  StarSharp,
  TrophySharp,
  FlashSharp
} from '@vicons/ionicons5'

export default defineComponent({
  name: 'SkillsSection',
  components: {
    CodeSlashSharp,
    ServerSharp,
    BuildSharp,
    CheckboxSharp,
    SettingsSharp,
    AlbumsSharp,
    CloudSharp,
    BugSharp,
    RocketSharp,
    StarSharp,
    TrophySharp,
    FlashSharp
  },
  data() {
    return {
      skillCategories: [
        {
          key: 'frontend',
          title: 'Frontend',
          description: 'Современные технологии пользовательского интерфейса',
          icon: 'CodeSlashSharp',
          skills: [
            {
              name: 'Vue.js Ecosystem',
              description: 'Разработка SPA приложений',
              items: ['Vue.js 3', 'Vuex', 'Pinia', 'Vue Router', 'Composition API'],
              iconComponent: 'CodeSlashSharp'
            },
            {
              name: 'Modern JavaScript',
              description: 'Современный ES6+ и TypeScript',
              items: ['ES6+', 'TypeScript', 'Async/Await', 'Module System'],
              iconComponent: 'FlashSharp'
            },
            {
              name: 'UI Frameworks',
              description: 'Библиотеки и стилизация',
              items: ['Naive UI', 'Tailwind CSS', 'SCSS', 'CSS Grid/Flexbox'],
              iconComponent: 'StarSharp'
            }
          ]
        },
        {
          key: 'backend',
          title: 'Backend',
          description: 'Серверные технологии и API разработка',
          icon: 'ServerSharp',
          skills: [
            {
              name: 'PHP/Laravel',
              description: 'Enterprise-уровень разработки',
              items: ['Laravel', 'Eloquent ORM', 'PHPUnit', 'Artisan Commands'],
              iconComponent: 'ServerSharp'
            },
            {
              name: 'Python',
              description: 'API и автоматизация',
              items: ['FastAPI', 'Flask', 'SQLAlchemy', 'Pandas'],
              iconComponent: 'CodeSlashSharp'
            },
            {
              name: 'Node.js',
              description: 'JavaScript на сервере',
              items: ['Express.js', 'Telegram Bot API', 'Socket.io'],
              iconComponent: 'FlashSharp'
            }
          ]
        },
        {
          key: 'database',
          title: 'Базы данных',
          description: 'Хранение и обработка данных',
          icon: 'AlbumsSharp',
          skills: [
            {
              name: 'SQL Databases',
              description: 'Реляционные базы данных',
              items: ['MySQL', 'PostgreSQL', 'Query Optimization', 'Indexing'],
              iconComponent: 'AlbumsSharp'
            },
            {
              name: 'NoSQL & Caching',
              description: 'Кеширование и очереди',
              items: ['Redis', 'Caching Strategies', 'Message Queues'],
              iconComponent: 'FlashSharp'
            },
            {
              name: 'Data Analysis',
              description: 'Анализ и обработка данных',
              items: ['Data Mining', 'ETL Processes', 'Database Design', 'Backup Strategies'],
              iconComponent: 'TrophySharp'
            }
          ]
        },
        {
          key: 'devops',
          title: 'DevOps',
          description: 'Развертывание и мониторинг',
          icon: 'CloudSharp',
          skills: [
            {
              name: 'Containerization',
              description: 'Docker и оркестрация',
              items: ['Docker', 'Docker Compose', 'Kubernetes'],
              iconComponent: 'CloudSharp'
            },
            {
              name: 'CI/CD',
              description: 'Автоматизация развертывания',
              items: ['GitLab CI', 'GitHub Actions', 'Automated Testing'],
              iconComponent: 'BuildSharp'
            },
            {
              name: 'Monitoring',
              description: 'Мониторинг и логирование',
              items: ['Logging', 'Metrics', 'Alerts', 'Performance'],
              iconComponent: 'BugSharp'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getTagType(categoryKey) {
      const typeMap = {
        'frontend': 'success',
        'backend': 'info',
        'database': 'warning',
        'devops': 'error'
      }
      return typeMap[categoryKey] || 'default'
    }
  }
})
</script>