<template>
  <section id="experience" data-section="experience" class="py-20">
    <div class="max-w-6xl mx-auto px-4">

      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Опыт работы
        </h2>
        <n-text depth="2" class="text-xl">
          4+ года коммерческой разработки
        </n-text>
      </div>

      <!-- Временная шкала -->
      <n-timeline size="large" class="max-w-4xl mx-auto">
        <n-timeline-item
            v-for="(job, index) in experiences"
            :key="index"
            :type="job.type"
            :time="job.period"
        >
          <!-- Основная карточка опыта -->
          <n-card
              size="medium"
              class="mb-4 hover:shadow-lg transition-all duration-300 bg-transparent backdrop-blur-3xl"
              :bordered="false"
          >
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div class="flex items-center gap-3">
                <n-avatar
                    :size="48"
                    :src="job.logo"
                    round
                    class="border-2 border-primary/20 shadow-md"
                />
                <div>
                  <n-text strong class="text-xl">{{ job.position }}</n-text>
                  <n-text depth="2" class="block text-lg">{{ job.company }}</n-text>
                </div>
              </div>
              <div class="flex gap-2">
                <n-tag :type="job.type" size="medium" round>
                  {{ job.period }}
                </n-tag>
                <n-tag v-if="job.duration" type="default" size="small" round>
                  {{ job.duration }}
                </n-tag>
              </div>
            </div>

            <!-- Роль -->
            <div class="flex items-center gap-2 mb-3">
              <n-icon size="16">
                <PersonSharp />
              </n-icon>
              <n-text strong>{{ job.role }}</n-text>
            </div>

            <!-- Достижения -->
            <n-collapse v-if="job.achievements?.length" class="mb-4" :bordered="false">
              <n-collapse-item title="Достижения" name="achievements">
                <n-list>
                  <n-list-item
                      v-for="(achievement, achIndex) in job.achievements"
                      :key="achIndex"
                  >
                      <n-icon size="16" class="text-green-500 mr-2">
                        <CheckmarkSharp />
                      </n-icon>
                    <n-text v-html="achievement" />
                  </n-list-item>
                </n-list>
              </n-collapse-item>
            </n-collapse>

            <!-- Технологии -->
            <div v-if="job.technologies?.length" class="mb-4">
              <div class="flex items-center gap-2 mb-3">
                <n-icon size="16">
                  <CodeSlashSharp />
                </n-icon>
                <n-text strong>Технологии</n-text>
              </div>

              <n-space>
                <n-tag
                    v-for="tech in job.technologies"
                    :key="tech"
                    size="small"
                    type="primary"
                    round
                    :bordered="false"
                >
                  {{ tech }}
                </n-tag>
              </n-space>
            </div>

            <!-- Причина завершения -->
            <div v-if="job.closure" class="flex items-center gap-2">
              <n-icon size="16">
                <InformationCircleSharp />
              </n-icon>
              <n-text strong>{{ job.closure }}</n-text>
            </div>
          </n-card>
        </n-timeline-item>
      </n-timeline>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import {
  PersonSharp,
  CheckmarkSharp,
  InformationCircleSharp,
  CodeSlashSharp
} from '@vicons/ionicons5'

// Импорт логотипов
import vbiLogo from '@/assets/images/logos/vbi-logo.png'
import tesswebLogo from '@/assets/images/logos/tessweb-logo.png'
import amocrmLogo from '@/assets/images/logos/amocrm-logo.png'

export default defineComponent({
  name: 'ExperienceSection',
  components: {
    PersonSharp,
    CheckmarkSharp,
    InformationCircleSharp,
    CodeSlashSharp
  },
  setup() {
    const experiences = [
      {
        position: 'Fullstack Developer',
        company: 'VBI',
        logo: vbiLogo,
        period: 'Январь 2023 — настоящее время',
        duration: '2+ года',
        type: 'success',
        role: 'Ключевой и единственный разработчик на внутренних проектах',
        achievements: [
          '<strong>Переработал архитектуру аналитической системы</strong>, сократив время формирования отчетов с 2-3 часов до 1 минуты',
          '<strong>Автоматизировал критические бизнес-процессы</strong>, исключив человеческий фактор в месячной отчетности',
          '<strong>Внедрил современные практики разработки</strong>: Git Flow, код-ревью, автоматическое тестирование, CI/CD',
          '<strong>Создал систему мониторинга</strong> с уведомлениями в Telegram для отслеживания критических метрик',
          '<strong>Повысил надежность системы</strong> через оптимизацию архитектуры и процессов'
        ],
        technologies: ['Laravel', 'Vue.js 3', 'MySQL', 'Redis', 'Docker', 'VK API', 'Яндекс.Директ API']
      },
      {
        position: 'Co-Founder & Fullstack Developer',
        company: 'TessWeb',
        logo: tesswebLogo,
        period: 'Январь 2022 — Январь 2023',
        duration: '1 год',
        type: 'info',
        role: 'Сооснователь и технический директор, ответственный за всю продуктовую разработку',
        achievements: [
          '<strong>Запустил 2 коммерческих продукта</strong> с нуля до работающего MVP с монетизацией',
          '<strong>Получил экспертизу в Telegram Mini Apps</strong> и интеграции с TON Blockchain',
          '<strong>Развил навыки продуктового мышления</strong> и работы с метриками роста',
          '<strong>Освоил fullstack разработку современных SPA</strong> на Vue.js + Node.js'
        ],
        closureTitle: 'Решение о закрытии',
        closure: 'Получив ценный предпринимательский опыт, принял решение сосредоточиться на технической экспертизе в более крупных проектах',
        technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'TON Blockchain', 'Telegram Bot API']
      },
      {
        position: 'Junior Backend Developer',
        company: 'AmoCRM',
        logo: amocrmLogo,
        period: 'Июль 2020 — Январь 2022',
        duration: '1.5 года',
        type: 'default',
        role: 'Backend разработчик в команде интеграций (после успешной стажировки)',
        achievements: [
          '<strong>Поддерживал высоконагруженный WhatsApp интеграционный сервис</strong>',
          '<strong>Разработал плагин для e-commerce платформ</strong> с нуля до продакшена',
          '<strong>Освоил микросервисную архитектуру</strong> и современные подходы к разработке в Enterprise',
          '<strong>Получил опыт в командной разработке</strong> по Agile методологии'
        ],
        closureTitle: 'Развитие карьеры',
        closure: 'Завершив все поставленные задачи и получив рекомендации от тимлида, принял решение развиваться в направлении fullstack разработки',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes']
      }
    ]

    const experienceStats = [
      { label: 'Общий опыт', value: 4, suffix: '+ лет' },
      { label: 'Компаний', value: 3, suffix: '' },
      { label: 'Проектов', value: 15, suffix: '+' },
      { label: 'Технологий', value: 20, suffix: '+' }
    ]

    return {
      experiences,
      experienceStats
    }
  }
})
</script>

<style scoped>
/* Кастомизация Timeline */
:deep(.n-timeline .n-timeline-item__header) {
  margin-bottom: 1rem;
}

:deep(.n-timeline .n-timeline-item__content) {
  padding-bottom: 2rem;
}

/* Кастомизация Collapse */
:deep(.n-collapse .n-collapse-item) {
  border-radius: 0.5rem;
}

/* Статистика */
.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Адаптивность */
@media (max-width: 768px) {
  .stat-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stat-cards {
    grid-template-columns: 1fr;
  }
}
</style>