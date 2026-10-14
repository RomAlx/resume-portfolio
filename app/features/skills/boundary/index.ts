import {skillGroups} from '~/features/skills/content'
import type {SkillGroup} from '~/features/skills/types'

export function getSkillGroups(): SkillGroup[] {
  return skillGroups
}
