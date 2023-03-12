<script setup lang="ts">
import type { Timetable } from '~/models/timetable'

defineProps({
  timetable: { type: Object as PropType<Timetable>, required: true }
})
</script>

<template>
  <div class="container px-4 mx-auto">
    <div
      class="md:columns-2 flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-12"
    >
      <div class="md:w-1/2">
        <nuxt-img
          :src="timetable.image.url"
          alt="dice-and-drink"
          width="720"
          height="720"
          fit="cover"
          loading="lazy"
        />
      </div>
      <div class="md:w-1/2 px-10 text-center md:text-left">
        <h2 class="text-3xl">{{ timetable.title }}</h2>
        <div v-html="timetable.description.html" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-height: 720px;
  object-fit: cover;
}
</style>
