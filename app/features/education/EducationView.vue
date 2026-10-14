<script setup lang="ts">
import Reveal from '~/components/Reveal.vue'
import {languages, schools} from '~/features/education/content'
import BaseCard from '~/ui/BaseCard.vue'
</script>

<template>
  <section id="education" class="section">
    <Reveal><h2>Образование</h2></Reveal>
    <div class="schools">
      <BaseCard
        v-for="school in schools"
        :key="school.place"
        v-reveal
        class="school reveal"
      >
        <p class="period">{{ school.period }}</p>
        <h3>{{ school.place }}</h3>
        <p>{{ school.program }}</p>
        <p class="context">{{ school.note }}</p>
      </BaseCard>
    </div>
    <Reveal>
      <p class="context">
        <span v-for="(language, index) in languages" :key="language.name">
          {{ language.name }} — {{ language.level }}<span v-if="index < languages.length - 1"> · </span>
        </span>
      </p>
    </Reveal>
  </section>
</template>
