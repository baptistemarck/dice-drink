<script setup lang="ts">
import Contact from '@/components/Contact.vue'

useSeoMeta({ title: 'Contact • Dice & Drink' })
</script>

<template>
  <Contact>
    <template #info-window>
      <GMapInfoWindow>
        <div class="max-w-lg text-center mx-auto py-12">
          <h1 class="text-3xl">Contact</h1>
          <p class="text-2xl">Vous avez besoin de nous contacter ?</p>
          <p class="my-5">C’est très simple :</p>
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
      </GMapInfoWindow>
    </template>
  </Contact>
</template>

<style lang="scss">
.vue-map {
  height: 100vh !important;
}
</style>
