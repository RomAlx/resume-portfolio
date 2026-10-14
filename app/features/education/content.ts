import type {Language, School} from '~/features/education/types'

export const schools: School[] = [
  {
    place: 'МТУСИ',
    program: '09.03.02 «Инженерия DevSecOps»',
    period: 'С 2026 года',
    note: 'Бакалавриат, заочно, 1 курс',
  },
  {
    place: 'МГТУ им. Н. Э. Баумана',
    program: 'Вакуумная и компрессорная техника',
    period: 'Неполное высшее',
    note: 'Техническое образование',
  },
]

export const languages: Language[] = [
  {name: 'Русский', level: 'родной'},
  {name: 'Английский', level: 'B2'},
]
