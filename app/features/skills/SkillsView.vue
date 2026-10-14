<script setup lang="ts">
import {ref} from 'vue'

import Reveal from '~/components/Reveal.vue'
import {skillGroups} from '~/features/skills/content'
import BaseButton from '~/ui/BaseButton.vue'
import BaseCard from '~/ui/BaseCard.vue'
import BaseChip from '~/ui/BaseChip.vue'
import BaseIcon from '~/ui/BaseIcon.vue'

const index = ref(0)

function placement(title: string) {
  if (title === 'Backend') {
    return 'is-backend'
  }
  if (title === 'Frontend') {
    return 'is-frontend'
  }
  return ''
}
</script>

<template>
  <section id="skills" class="section">
    <Reveal><h2>Навыки</h2></Reveal>
    <div class="skill-grid">
      <BaseCard
        v-for="group in skillGroups"
        :key="group.title"
        v-reveal
        class="skill-card reveal"
        :class="placement(group.title)"
      >
        <h3>{{ group.title }}</h3>
        <div class="chips">
          <BaseChip v-for="item in group.items" :key="item.name">
            <span class="chip-body">
              <BaseIcon :name="item.icon" :size="14" />
              {{ item.name }}
            </span>
          </BaseChip>
        </div>
      </BaseCard>
    </div>
    <div class="skill-tabs">
      <div class="switch" role="tablist" aria-label="Навыки">
        <BaseButton
          v-for="(group, groupIndex) in skillGroups"
          :key="group.title"
          class="tab"
          :class="{active: index === groupIndex}"
          text
          rounded
          type="button"
          role="tab"
          :aria-selected="index === groupIndex"
          @click="index = groupIndex"
        >
          {{ group.title }}
        </BaseButton>
      </div>
      <Reveal>
        <div class="stage">
        <Transition name="swap">
          <BaseCard :key="skillGroups[index]?.title" class="skill-card">
            <h3>{{ skillGroups[index]?.title }}</h3>
            <div class="chips">
              <BaseChip v-for="item in skillGroups[index]?.items ?? []" :key="item.name">
                <span class="chip-body">
                  <BaseIcon :name="item.icon" :size="14" />
                  {{ item.name }}
                </span>
              </BaseChip>
            </div>
          </BaseCard>
        </Transition>
        </div>
      </Reveal>
    </div>
  </section>
</template>
