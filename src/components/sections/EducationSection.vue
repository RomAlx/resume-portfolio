<template>
  <section id="education" data-section="education" class="py-5 relative">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-bl from-warning/5 via-transparent to-info/5"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Образование и развитие
        </h2>
        <p class="text-xl">
          Непрерывное обучение и профессиональный рост
        </p>
      </div>

      <!-- Formal Education -->
      <div class="mb-16">
        <n-card
            :bordered="true"
            class="bg-transparent backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
        >
          <div class="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 p-8">
            <!-- University Logo/Icon -->
            <div class="flex-shrink-0">
              <div class="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl relative group">
                <n-icon size="48">
                  <SchoolSharp />
                </n-icon>
                <!-- Decorative rings -->
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-110"></div>
              </div>
            </div>

            <!-- Education Details -->
            <div class="flex-1 text-center lg:text-left space-y-6">
              <div>
                <h3 class="text-3xl font-bold mb-4">
                  МГТУ им. Н.Э. Баумана
                </h3>
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <n-tag type="primary" size="large" :bordered="false" class="rounded-xl px-6 py-2 font-semibold">
                    Техническое образование
                  </n-tag>
                  <n-tag type="info" size="medium" :bordered="false" class="rounded-lg">
                    Неполное высшее
                  </n-tag>
                </div>
                <p class="text-xl opacity-70">
                  Специальность: Вакуумная и компрессорная техника
                </p>
              </div>

              <!-- Education Benefits -->
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-primary/5">
                  <h4 class="font-semibold mb-2">Техническое мышление</h4>
                  <p class="text-sm opacity-70">Системный подход к решению сложных задач</p>
                </div>
                <div class="p-4 rounded-xl bg-secondary/5">
                  <h4 class="font-semibold mb-2">Аналитические навыки</h4>
                  <p class="text-sm opacity-70">Глубокий анализ и оптимизация процессов</p>
                </div>
              </div>
            </div>
          </div>
        </n-card>
      </div>

      <!-- Professional Development Timeline -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-center mb-12">
          Профессиональное развитие
        </h3>

        <n-timeline>
          <!-- AmoCRM Experience -->
          <n-timeline-item
              type="success"
              title="AmoCRM"
          >
            <n-card
                :bordered="false"
                class="bg-transparent backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div class="flex items-start space-x-4">
                <n-avatar
                    :size="56"
                    :src="amocrmLogo"
                    class="shadow-md flex-shrink-0"
                />
                <div class="flex-1">
                  <p class="opacity-70 mb-3">
                    Интенсивная стажировка по backend разработке с дальнейшим трудоустройством
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <n-tag size="small" type="success" :bordered="false" class="rounded-lg">Стажировка</n-tag>
                    <n-tag size="small" type="info" :bordered="false" class="rounded-lg">Backend</n-tag>
                    <n-tag size="small" type="warning" :bordered="false" class="rounded-lg">PHP</n-tag>
                  </div>
                </div>
              </div>
            </n-card>
          </n-timeline-item>

          <!-- Self-education -->
          <n-timeline-item
              type="warning"
              title="Самообразование"
          >
            <n-card
                :bordered="false"
                class="bg-transparent backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-warning to-info rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <n-icon size="24">
                    <StarSharp />
                  </n-icon>
                </div>
                <div class="flex-1">
                  <p class="opacity-70 mb-3">
                    Изучение новых технологий, лучших практик и следование трендам индустрии
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <n-tag size="small" type="warning" :bordered="false" class="rounded-lg">Vue.js</n-tag>
                    <n-tag size="small" type="info" :bordered="false" class="rounded-lg">DevOps</n-tag>
                    <n-tag size="small" type="success" :bordered="false" class="rounded-lg">Modern JS</n-tag>
                  </div>
                </div>
              </div>
            </n-card>
          </n-timeline-item>

          <!-- Future Learning -->
          <n-timeline-item
              type="info"
              title="Планы развития"
          >
            <n-card
                :bordered="false"
                class="bg-transparent backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-info to-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <n-icon size="24">
                    <RocketSharp />
                  </n-icon>
                </div>
                <div class="flex-1">
                  <p class="opacity-70 mb-3">
                    Углубление в архитектуру систем, изучение новых фреймворков и развитие лидерских навыков
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <n-tag size="small" type="info" :bordered="false" class="rounded-lg">System Design</n-tag>
                    <n-tag size="small" type="primary" :bordered="false" class="rounded-lg">Team Leading</n-tag>
                    <n-tag size="small" type="warning" :bordered="false" class="rounded-lg">AI/ML</n-tag>
                  </div>
                </div>
              </div>
            </n-card>
          </n-timeline-item>
        </n-timeline>
      </div>

      <!-- Skills Summary Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Languages -->
        <n-card
            :bordered="true"
            class="bg-transparent text-center backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div class="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <n-icon size="24">
              <EarthSharp />
            </n-icon>
          </div>
          <h4 class="text-lg font-bold mb-4">Языки</h4>
          <div class="space-y-3">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium">Русский</span>
                <span class="text-xs opacity-60">Родной</span>
              </div>
              <n-progress type="line" :percentage="100" :height="4" :show-indicator="false" color="#00C851" />
            </div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium">Английский</span>
                <span class="text-xs opacity-60">B2</span>
              </div>
              <n-progress type="line" :percentage="75" :height="4" :show-indicator="false" color="#2196F3" />
            </div>
          </div>
        </n-card>

        <!-- Work Format -->
        <n-card
            :bordered="true"
            class="bg-transparent text-center backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div class="w-16 h-16 mx-auto bg-gradient-to-r from-secondary to-warning rounded-2xl flex items-center justify-center shadow-lg">
            <n-icon size="24">
              <BusinessSharp />
            </n-icon>
          </div>
          <h4 class="text-lg font-bold mb-4">Формат работы</h4>
          <div class="space-y-2">
            <n-tag size="small" type="default" class="rounded-full">Офис</n-tag>
            <n-tag size="small" type="default" class="rounded-full">Удаленно</n-tag>
            <n-tag size="small" type="default" class="rounded-full">Гибрид</n-tag>
          </div>
        </n-card>

        <!-- Availability -->
        <n-card
            :bordered="true"
            class="bg-transparent text-center backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div class="w-16 h-16 mx-auto bg-gradient-to-r from-success to-primary rounded-2xl flex items-center justify-center shadow-lg">
            <n-icon size="24">
              <CheckmarkSharp />
            </n-icon>
          </div>
          <h4 class="text-lg font-bold mb-4">Готовность</h4>
          <div class="space-y-2">
            <n-tag size="small" type="success" class="rounded-full">Москва</n-tag>
            <n-tag size="small" type="info" class="rounded-full">Релокация</n-tag>
          </div>
        </n-card>

        <!-- Personal Qualities -->
        <n-card
            :bordered="true"
            class="bg-transparent text-center backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div class="w-16 h-16 mx-auto bg-gradient-to-r from-warning to-error rounded-2xl flex items-center justify-center shadow-lg">
            <n-icon size="24">
              <PeopleSharp />
            </n-icon>
          </div>
          <h4 class="text-lg font-bold mb-4">Качества</h4>
          <div class="space-y-2">
            <n-tag size="small" type="warning" class="rounded-full">Результативность</n-tag>
            <n-tag size="small" type="error" class="rounded-full">Системность</n-tag>
            <n-tag size="small" type="default" class="rounded-full">Адаптивность</n-tag>
          </div>
        </n-card>
      </div>

      <!-- Personal Qualities Detailed -->
      <n-card
          :bordered="true"
          class="bg-transparent bg-gradient-to-r from-info/10 via-warning/5 to-success/10 backdrop-blur-xl border border-info/20"
      >
        <template #header>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-info to-success rounded-xl flex items-center justify-center shadow-lg">
              <n-icon size="24">
                <StarSharp />
              </n-icon>
            </div>
            <div>
              <h3 class="text-xl font-bold">Личные качества</h3>
              <p class="opacity-70">Что делает меня эффективным разработчиком</p>
            </div>
          </div>
        </template>

        <div class="grid md:grid-cols-2 gap-6">
          <div
              v-for="(quality, index) in personalQualities"
              :key="quality.title"
              class="flex items-start space-x-4 p-6 rounded-xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:scale-95"
              :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="w-10 h-10 bg-gradient-to-r from-success to-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
              <n-icon size="16">
                <CheckmarkSharp />
              </n-icon>
            </div>
            <div class="flex-1">
              <h4 class="font-semibold mb-2">{{ quality.title }}</h4>
              <p class="text-sm opacity-70">{{ quality.description }}</p>
            </div>
          </div>
        </div>
      </n-card>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { SchoolSharp, CheckmarkSharp, StarSharp, EarthSharp, BusinessSharp, PeopleSharp, RocketSharp } from '@vicons/ionicons5'

// Импорт логотипов
import amocrmLogo from '@/assets/images/logos/amocrm-logo.png'

export default defineComponent({
  name: 'EducationSection',
  components: {
    SchoolSharp,
    CheckmarkSharp,
    StarSharp,
    EarthSharp,
    BusinessSharp,
    PeopleSharp,
    RocketSharp
  },
  data() {
    return {
      amocrmLogo,
      personalQualities: [
        {
          title: 'Результативность',
          description: 'Фокус на измеримых бизнес-результатах и KPI. Всегда довожу проекты до успешного завершения.'
        },
        {
          title: 'Системное мышление',
          description: 'Способность видеть продукт целиком от пользователя до инфраструктуры. Понимание взаимосвязей.'
        },
        {
          title: 'Адаптивность',
          description: 'Успешно работаю как с современным стеком, так и с legacy системами. Быстро изучаю новые технологии.'
        },
        {
          title: 'Командная работа',
          description: 'Опыт работы в кросс-функциональных командах, менторинга и эффективной коммуникации.'
        }
      ]
    }
  }
})
</script>

<style scoped>
/* Custom timeline styling */
:deep(.n-timeline .n-timeline-item .n-timeline-item-content .n-timeline-item-meta) {
  font-weight: 600;
  font-size: 14px;
}

:deep(.n-timeline .n-timeline-item .n-timeline-item-content .n-timeline-item-title) {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
}

/* Enhanced card hover effects */
.n-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.n-card:hover {
  transform: translateY(-4px);
}

/* Timeline item spacing */
:deep(.n-timeline-item:not(:last-child)) {
  padding-bottom: 32px;
}
</style>