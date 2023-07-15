<template>
  <div class="bg-gray-900">
    <div class="container mx-auto py-3 md:py-6 px-4">
      <div
        class="flex flex-col md:flex-row gap-3 justify-between items-center text-slate-50"
      >
        <NuxtLink href="/">
          <Logo />
        </NuxtLink>
        <nav class="flex flex-row gap-3 list-none">
          <li class="flex flex-col justify-center">
            <NuxtLink active-class="text-cyan-400" href="/">Accueil</NuxtLink>
          </li>
          <li class="flex flex-col justify-center">
            <NuxtLink active-class="text-cyan-400" href="/events"
              >Événements</NuxtLink
            >
          </li>
          <li class="flex flex-col justify-center">
            <NuxtLink active-class="text-cyan-400" href="/contact"
              >Contact</NuxtLink
            >
          </li>
          <SocialNetwork />
        </nav>
      </div>
    </div>
  </div>
</template>
