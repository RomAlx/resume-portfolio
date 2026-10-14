import {languages, schools} from '~/features/education/content'
import type {Language, School} from '~/features/education/types'

export function getSchools(): School[] {
  return schools
}

export function getLanguages(): Language[] {
  return languages
}
