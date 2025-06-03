<template>
  <header class="p-4 shadow bg-white">
    <NuxtLink to="/" class="font-bold text-xl">Holz und Gut</NuxtLink>
  </header>

  <NuxtPage />          <!-- dynamische Seite -->

  <footer class="p-4 text-center text-sm text-gray-500">
    © {{ new Date().getFullYear() }} Holz&nbsp;und&nbsp;gut
  </footer>
</template>
