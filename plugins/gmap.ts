import { defineNuxtPlugin } from 'nuxt/app'
import VueGoogleMaps from 'vue-google-maps-community-fork'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_MAPS_API_KEY: string
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: config.public.GOOGLE_MAPS_API_KEY
    }
  })
})
