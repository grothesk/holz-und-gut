<script setup>
defineProps({
  image: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1522778116374-31f4d82eefd5?auto=format&fit=crop&w=800&q=80',
  },
});
</script>

<template>
  <div class="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col h-full">
    <!-- Bild oben -->
    <img :src="image" alt="" class="h-48 w-full object-cover" />

    <!-- Inhalt unten -->
    <div class="p-4 space-y-2 flex flex-col flex-1 justify-between text-gray-800">
      <div>
        <h3 class="text-xl font-semibold">Kontakt</h3>

        <address class="not-italic leading-relaxed mt-2">
          Ralph&nbsp;Achilles<br>
          Heilsauring&nbsp;13<br>
          23858&nbsp;Reinfeld
        </address>

        <p class="mt-2">
          Tel.&nbsp;
          <a href="tel:+4915141614320" class="underline hover:text-amber-700">
            +49&nbsp;1514&nbsp;1614320
          </a>
        </p>

        <p>
          E-Mail&nbsp;
          <a href="mailto:ralphachilles@posteo.de" class="underline hover:text-amber-700">
            ralphachilles@posteo.de
          </a>
        </p>
      </div>

    <a
    href="mailto:ralphachilles@posteo.de"
    class="inline-block w-max mt-4 px-6 py-3 bg-amber-700 text-white
            rounded-xl font-medium hover:bg-amber-800 transition"
    >
    Jetzt Anfrage senden
    </a>

    </div>
  </div>
</template>
