<script setup lang="ts">
import { gql } from 'graphql-request'
import Card from './Card.vue'
import type { Event } from '@/models/event'

const { $hygraph } = useNuxtApp()

const { data: events } = useAsyncData<{ events: Event[] }>('events', () =>
  $hygraph.request(gql`
    query Events {
      events {
        date
        image {
          url
          height
          width
        }
        title
      }
    }
  `)
)

const columns = Math.min(Math.max(events?.value?.events.length || 1, 1), 4)
</script>

<template>
  <div class="container text-center px-4 mx-auto">
    <h2 class="text-3xl my-10">Événements à venir</h2>
    <div v-if="events?.events.length" :class="[`md:columns-${columns}`]">
      <Card v-for="event in events?.events" :key="event.id" :event="event" />
    </div>
    <div v-else>
      <p>
        Aucun événement prévu actuellement. N'hésitez pas a nous contacter :
      </p>
      <ul>
        <li>
          Par téléphone :
          <a href="tel:+33557884284">+33 (0) 5 57 88 42 84</a>
        </li>
        <li>Par mail : <ObfuscatedEmail /></li>
      </ul>
      <p class="my-5">Ou sur tous nos réseaux</p>
      <ul class="flex flex-row gap-3 items-center justify-center list-none">
        <SocialNetwork />
      </ul>
    </div>
  </div>
</template>
