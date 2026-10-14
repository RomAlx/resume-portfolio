<script setup lang="ts">
import EducationView from '~/features/education/EducationView.vue'
import ExperienceView from '~/features/experience/ExperienceView.vue'
import ProfileView from '~/features/profile/ProfileView.vue'
import ProjectsView from '~/features/projects/ProjectsView.vue'
import SkillsView from '~/features/skills/SkillsView.vue'
</script>

<template>
  <main class="page">
    <ProfileView />
    <ExperienceView />
    <ProjectsView />
    <SkillsView />
    <EducationView />
  </main>
</template>
