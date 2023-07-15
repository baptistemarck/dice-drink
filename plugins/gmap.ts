import { defineNuxtPlugin } from 'nuxt/app'
import VueGoogleMaps from '@fawmi/vue-google-maps'

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
