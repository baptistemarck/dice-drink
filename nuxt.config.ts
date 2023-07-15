// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dice & Drink',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [],
      link: [],
      // please note that this is an area that is likely to change
      style: [],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  build: {
    transpile: ['@fawmi/vue-google-maps', '@googlemaps/markercluster']
  },
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
      BEARER: process.env.BEARER,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge']
})
