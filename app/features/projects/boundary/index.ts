import {projects} from '~/features/projects/content'
import type {Project} from '~/features/projects/types'

export function getProjects(): Project[] {
  return projects
}
