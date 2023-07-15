<script setup lang="ts">
import { gql } from 'graphql-request'
import Card from '@/components/Event/Card.vue'
import Contact from '@/components/Contact.vue'
import TimeTable from '@/components/TimeTable.vue'
import type { Event } from '@/models/event'
import type { Timetable } from '~/models/timetable'

interface Homepage {
  hero: {
    logo: {
      url: string
      height: number
      width: number
    }
    intro: {
      html: HTMLElement
      raw: {
        children: {
          children: {
            text: string
          }[]
        }[]
      }
    }
    heroBackgroundImage: {
      url: string
    }
  }
  events: Event[]
  menu: {
    title: string
    menu: {
      url: string
      size: string
      fileName: string
    }
    description: {
      html: HTMLElement
    }
    menuBackgroundImage: {
      url: string
    }
  }
  timetable: Timetable
}

const { $hygraph } = useNuxtApp()

const { data: homepage } = useAsyncData<Homepage>('homepage', () =>
  $hygraph.request(gql`
    query Homepage {
      hero(where: { id: "clhk8v6kwf3mz0aw6uwjn96lb" }) {
        logo {
          url
          height
          width
        }
        intro {
          html
          raw
        }
        heroBackgroundImage {
          url
        }
      }
      events(orderBy: date_DESC, last: 8) {
        title
        image {
          height
          width
          url
        }
        date
        id
      }
      menu(where: { id: "clhk9g859f5pf0aw6ma95lxw2" }) {
        title
        menu {
          url
          size
          fileName
        }
        description {
          html
        }
        menuBackgroundImage {
          url
        }
      }
      timetable(where: { id: "clhk8vs7af33r0aw0hkmcigcf" }) {
        title
        image {
          url
        }
        description {
          html
        }
      }
    }
  `)
)

const description =
  homepage.value?.hero.intro.raw.children[2]?.children[0]?.text

useSeoMeta({
  description,
  ogDescription: description,
  ogImage: homepage.value?.hero.logo.url,
  twitterCard: 'summary_large_image'
})

const columns = Math.min(Math.max(homepage.value?.events.length || 1, 1), 4)
</script>

<template>
  <div
    class="relative overflow-hidden pb-12 flex flex-col justify-center items-center"
  >
    <NuxtImg
      v-if="homepage?.hero.heroBackgroundImage"
      class="w-screen absolute inset-0"
      :src="homepage?.hero.heroBackgroundImage.url"
      preload
      alt=""
      width="1920"
      height="720"
    />
    <NuxtImg
      v-if="homepage?.hero.logo"
      class="relative max-h-min z-5"
      alt="Dice and Drink"
      :src="homepage?.hero.logo.url"
      preload
      :height="homepage?.hero.logo.height"
      :width="homepage?.hero.logo.width"
    />
  </div>
  <div class="intro container px-4 mx-auto">
    <div class="max-w-lg text-center mx-auto py-12">
      <div v-html="homepage?.hero.intro.html" />
    </div>
  </div>
  <TimeTable v-if="homepage?.timetable" :timetable="homepage?.timetable" />
  <div
    v-if="homepage?.events.length"
    class="container text-center px-4 mx-auto"
  >
    <h2 class="text-3xl my-10">Événements à venir</h2>
    <div :class="[`md:columns-${columns}`]">
      <Card v-for="event in homepage?.events" :key="event.id" :event="event" />
    </div>
  </div>
  <div v-if="homepage?.menu" class="relative overflow-hidden pb-12">
    <NuxtImg
      :src="homepage?.menu.menuBackgroundImage.url"
      class="w-screen absolute inset-0 -z-50"
      lazy
      alt=""
      width="1920"
      height="720"
    />
    <div class="container px-4 text-center mx-auto">
      <div
        class="max-w-lg text-center mx-auto py-36 flex flex-col items-center"
      >
        <h2 class="text-3xl">{{ homepage?.menu.title }}</h2>
        <a
          :href="homepage?.menu.menu.url"
          target="_blank"
          class="px-5 py-4 my-5 rounded-md bg-gray-900 text-slate-50"
        >
          Découvrir notre carte
        </a>
      </div>
    </div>
  </div>
  <Contact />
</template>

<style lang="scss">
.intro {
  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 1rem;
  }
}
</style>
