<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
    <UCard class="max-w-md w-full text-center shadow-lg">
      <div class="flex flex-col items-center space-y-4">
        <UIcon name="i-heroicons-shield-exclamation" class="w-12 h-12 text-primary-600" />
        <h2 class="text-2xl font-bold">Witaj w aplikacji bezpieczeństwa!</h2>
        <p class="text-gray-600">
          Wybierz, który rodzaj ataku chcesz przetestować:
        </p>
        <div class="flex gap-4 justify-center mt-4">
          <UButton
            label="CSRF"
            to="/csrf"
            color="primary"
            size="lg"
            icon="i-heroicons-arrow-right-circle"
          />
          <UButton
            label="Clickjacking"
            to="/clickjacking"
            color="secondary"
            size="lg"
            icon="i-heroicons-arrow-right-circle"
          />
        </div>
      </div>
    </UCard>
  </div>
</template>