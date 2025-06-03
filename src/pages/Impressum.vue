<template>
    <main class="prose prose-amber mx-auto px-4 py-16">
      <h1>Impressum</h1>
  
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>{{ firm }}</strong><br>
        {{ street }}<br>
        {{ city }}
      </p>
  
      <h2>Vertreten durch</h2>
      <p>{{ ceo }}</p>
  
      <h2>Kontakt</h2>
      <p>
        Telefon: <a :href="`tel:${phone}`">{{ phone }}</a><br>
        E-Mail: <a :href="`mailto:${mail}`">{{ mail }}</a>
      </p>
  
      <h2>Umsatzsteuer-ID</h2>
      <p>USt-ID gemäß § 27 a UStG: {{ vatId }}</p>
  
      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>{{ ceo }}, Anschrift wie oben</p>
  
      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit: 
        <a href="https://ec.europa.eu/consumers/odr/">ec.europa.eu/consumers/odr</a>.
        Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>
  
      <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungs­verfahren
        vor einer Verbraucher­schlichtungs­stelle teilzunehmen.
      </p>
    </main>
  </template>
  
  <script setup>
  /* Platzhalter – ersetze durch echte Daten */
  const firm   = 'Holz & Gut GmbH';
  const street = 'Musterstraße 12';
  const city   = '12345 Musterstadt';
  const ceo    = 'Max Mustermann';
  const phone  = '+49 30 123456-0';
  const mail   = 'info@holz-und-gut.de';
  const vatId  = 'DE123456789';
  </script>
  
  <style scoped>
  /* kleine Auflockerung, fürs Prose-Layout reicht die Tailwind-Klasse */
  </style>
  