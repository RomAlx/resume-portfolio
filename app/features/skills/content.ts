import type {SkillGroup} from '~/features/skills/types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      {name: 'Nuxt 4', icon: 'nuxt'},
      {name: 'Vue 3', icon: 'vue'},
      {name: 'TypeScript', icon: 'typescript'},
      {name: 'PrimeVue', icon: 'primevue'},
      {name: 'Pinia', icon: 'pinia'},
    ],
  },
  {
    title: 'Backend',
    items: [
      {name: 'Laravel', icon: 'laravel'},
      {name: 'FastAPI', icon: 'fastapi'},
      {name: 'PHP', icon: 'php'},
      {name: 'Python', icon: 'python'},
      {name: 'Node.js', icon: 'node'},
    ],
  },
  {
    title: 'Базы данных',
    items: [
      {name: 'PostgreSQL', icon: 'postgresql'},
      {name: 'MySQL', icon: 'mysql'},
      {name: 'Redis', icon: 'redis'},
    ],
  },
  {
    title: 'Инфраструктура',
    items: [
      {name: 'Docker', icon: 'docker'},
      {name: 'nginx', icon: 'nginx'},
      {name: 'Git Actions', icon: 'git'},
    ],
  },
  {
    title: 'Мониторинг',
    items: [
      {name: 'Prometheus', icon: 'prometheus'},
      {name: 'Grafana', icon: 'grafana'},
      {name: 'Loki', icon: 'loki'},
    ],
  },
]
