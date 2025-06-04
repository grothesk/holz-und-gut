<template>
    <main class="space-y-16">
      <!-- Hero -->
      <section class="relative h-[60vh] md:h-[50vh] lg:h-[40vh] flex items-center">
        <img :src="heroImg" alt="" class="absolute inset-0 w-full h-full object-cover brightness-75" />
        <div class="relative z-10 mx-auto max-w-4xl text-center text-white">
          <h1 class="text-5xl font-bold drop-shadow-xl">Holz und Gut</h1>
          <p class="mt-6 text-lg">
            Dienstleistungen rund ums Holz
          </p>
        </div>
      </section>
  
      <!-- Leistungen -->
      <section class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Unsere Leistungen</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <ServiceCard
            title="Aufbau"
            description="von Möbeln und Küchen"
            :image="kommodeImg"
          />
          <ServiceCard
            title="Ausbau"
            description="vom Keller bis zum Dach"
            :image="dachbodenImg"
          />
          <ServiceCard
            title="Reparaturen"
            description="aller Art"
            :image="reparaturImg"
          />
        </div>
      </section>
      <section class="max-w-6xl mx-auto px-4 mb-16">
        <ContactCard :image="werkstattImg"/>
      </section>
    </main>
  </template>
  
  <script setup>
  import ServiceCard from '@/components/ServiceCard.vue';
  import ContactCard from '@/components/ContactCard.vue';
  import heroImg from '@/assets/hero.jpg';
  import dachbodenImg from '@/assets/dachboden.jpg';
  import kommodeImg from '@/assets/kommode.jpg';
  import reparaturImg from '@/assets/reparatur.jpg';
  import werkstattImg from '@/assets/werkstatt.jpg';  
  </script>
  