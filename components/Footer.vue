<template>
  <footer class="bg-gray-900 py-12">
    <div class="container mx-auto text-center text-slate-50">
      <NuxtLink href="/">
        <Logo />
      </NuxtLink>
      <div class="flex flex-col md:flex-row justify-center gap-2 py-3 md:py-5">
        <p>hello@diceanddrink.fr</p>
        <p>phone</p>
        <p>220 Cours du Maréchal Gallieni, 33400 – Talence</p>
        <p>©{{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>
