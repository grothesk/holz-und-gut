<template>
    <div class="rounded-2xl shadow-lg overflow-hidden bg-white">
      <img :src="image" alt="" class="h-48 w-full object-cover" />
      <div class="p-4 space-y-2">
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <p class="text-sm text-gray-600">{{ description }}</p>
        <!-- <button class="mt-2 px-4 py-2 rounded-xl bg-amber-700 text-white hover:bg-amber-800 transition">
          Angebot anfordern
        </button> -->
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['title', 'description', 'image']);
  </script>
  