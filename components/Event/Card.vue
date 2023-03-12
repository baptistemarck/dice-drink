<script setup lang="ts">
import type { Event } from '~/models/event'

defineProps({
  event: { type: Object as PropType<Event>, required: true }
})
</script>

<template>
  <article class="flex flex-col md:w-1/4">
    <nuxt-img
      fit="cover"
      loading="lazy"
      :src="event.image.url"
      :width="event.image.width"
      :height="event.image.height"
    />
    <div class="py-4">
      <h3 class="text-2xl">{{ event.title }}</h3>
      <p class="text-xl">{{ event.date }}</p>
      <!-- <button>Plus d'informations</button> -->
    </div>
  </article>
</template>

<style lang="scss" scoped>
img {
  max-height: 320px;
  object-fit: cover;
}
</style>
