<template>
  <div class="max-w-3xl mx-auto py-8 px-4 space-y-8">
    <!-- Sekcja informacyjna o Clickjacking -->
    <UCard>
      <template #header>
        <h2 class="text-2xl font-bold text-primary">Czym jest Clickjacking?</h2>
      </template>

      <div class="space-y-4">
        <p class="text-gray-300">
          Clickjacking (znany też jako <strong>UI redress attack</strong>) to technika ataku polegająca na nakłonieniu użytkownika do kliknięcia w element, który jest ukryty pod warstwą pozornie niewinnej zawartości.
        </p>

        <div class=" p-4 rounded-lg">
          <h3 class="font-bold mb-2">Jak działa atak?</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Atakujący osadza stronę docelową w przezroczystym iframe</li>
            <li>Nakłada fałszywy interfejs (np. przycisk "Darmowy iPhone")</li>
            <li>Ofiara klika w widoczny element, ale aktywuje ukrytą akcję (np. usunięcie konta)</li>
          </ul>
        </div>

        <div class=" p-4 rounded-lg">
          <h3 class="font-bold mb-2">Jak się chronić?</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Użyj nagłówka <code>X-Frame-Options: DENY</code></li>
            <li>Zaimplementuj Content Security Policy z <code>frame-ancestors</code></li>
            <li>Dodaj framebusting scripts dla starszych przeglądarek</li>
          </ul>
        </div>
      </div>
    </UCard>

    <!-- Przycisk do testu -->
    <UCard>
      <template #header>
        <h3 class="text-lg font-semibold">Przetestuj clickjacking w akcji</h3>
      </template>
      
      <div class="text-center">
        <UButton 
          to="/clickjacking/game"
          color="primary"
          icon="i-heroicons-arrow-right-20-solid"
          class="text-lg px-8 py-4"
        >
          Przejdź do symulacji ataku
        </UButton>
        
        <p class="mt-4 text-sm text-gray-500">
          Uwaga: To bezpieczna symulacja edukacyjna. Nie wykonujemy prawdziwych akcji.
        </p>
      </div>
    </UCard>
  </div>
</template>

<script setup>
// Nie jest wymagana dodatkowa logika, routing obsługuje Nuxt
</script>