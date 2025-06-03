<script setup lang="ts">
defineProps<{ service: { title: string; desc: string; img: string } }>()
</script>

<template>
  <div class="overflow-hidden rounded-2xl shadow group hover:shadow-lg">
    <NuxtImg :src="service.img" :alt="service.title" class="w-full h-40 object-cover" />
    <div class="p-5">
      <h3 class="font-semibold text-lg mb-1 group-hover:text-primary-600 transition">{{ service.title }}</h3>
      <p class="text-sm text-gray-600">{{ service.desc }}</p>
    </div>
  </div>
</template>
