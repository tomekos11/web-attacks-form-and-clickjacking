<template>
  <div class="min-h-screen flex flex-col">
    <UCard as="header" class="rounded-none shadow-none border-b flex flex-col md:flex-row items-center justify-between px-6 py-4">
      <div class="flex items-center space-x-3">
        <UIcon name="i-heroicons-shield-check" class="text-primary-600 w-7 h-7" />
        <span class="text-xl font-bold text-primary-700">Ataki CSRF i Clickjacking</span>
      </div>
      <nav class="flex space-x-4 mt-3 md:mt-0">
        <UButton to="/" color="primary" variant="ghost">Strona główna</UButton>
        <UButton to="/csrf" color="primary" variant="ghost">CSRF</UButton>
        <UButton to="/clickjacking" color="primary" variant="ghost">Clickjacking</UButton>
      </nav>
    </UCard>

    <main class="flex-1 py-8 px-4">
      <NuxtPage />
    </main>

    <UCard as="footer" class="rounded-none shadow-none border-t text-center py-4">
      <div class="flex flex-col items-center space-y-2">
        <span class="text-sm text-gray-600">© 2025 MyApp</span>
        <span class="text-xs text-gray-400">by TS</span>
      </div>
    </UCard>
  </div>
</template>