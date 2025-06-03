<script setup lang="ts">
const leistungen = [
  { 
    title: 'Möbel nach Maß', 
    desc: 'Individuelle Anfertigung...', 
    img: '../img/odenwald.jpg' 
  },
  { 
    title: 'Türen & Fenster', 
    desc: 'Montage energieeffizienter...', 
    img: '../img/harz-schnee.jpg' 
  },
  { 
    title: 'Reparaturen',     
    desc: 'Schneller Service...',        
    img: '../img/harz-fichten-0.jpg' 
  }
]
</script>

<template>
  <HeroBanner />

  <section class="container mx-auto py-16 grid md:grid-cols-3 gap-8">
    <ServiceCard v-for="s in leistungen" :key="s.title" :service="s" />
  </section>
</template>
