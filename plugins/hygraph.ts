import { defineNuxtPlugin } from 'nuxt/app'
import { GraphQLClient } from 'graphql-request'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HYGRAPH_ENDPOINT: string
      BEARER: string
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const client = new GraphQLClient(config.public.HYGRAPH_ENDPOINT, {
    headers: {
      authorization: `Bearer ${config.public.BEARER}`
    }
  })

  return {
    provide: {
      hygraph: client
    }
  }
})
