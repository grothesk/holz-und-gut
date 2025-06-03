<script setup lang="ts">
const images = Array.from({ length: 1 }, (_, i) =>
    `../img/werkzeug.jpg`)
//  `https://source.unsplash.com/featured/800x600?wood-${i + 1}`)
</script>

<template>
  <section class="container mx-auto py-16">
    <h2 class="text-3xl font-bold text-center mb-10">Portfolio</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtImg v-for="(src,i) in images" :key="i" :src="src" :alt="`Projekt ${i+1}`"
               class="w-full h-64 object-cover rounded-xl shadow" />
    </div>
  </section>
</template>
