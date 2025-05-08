<template>
  <div class="relative flex items-center justify-center min-h-screen bg-slate-900 overflow-hidden">
    <!-- Niewidoczny iframe z podatną stroną -->
    <iframe
      class="absolute top-0 left-0 w-full h-full opacity-0 z-10 pointer-events-auto"
      src="http://localhost:9000/stored-xss"
    />

    <!-- Fałszywa zawartość widoczna dla użytkownika -->
    <div
      class="relative z-20 bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center"
      style="width: 400px;"
    >
      <h1 class="text-2xl font-bold mb-2">Zadanie specjalne!</h1>
      <p class="mb-4 text-gray-600">Wygraj nagrodę jeśli <u>100</u> razy złapiesz klocek</p>
      <div class="font-bold mb-6 text-primary-600">Uważaj ten klocek ucieka!</div>
      <UButton label="Zacznij grę o wygraną" @click="show = true" />
    </div>

    <!-- Uciekający, przycisk po prawej stronie -->
    <button
      v-if="show && counter < 100"
      class="absolute z-5 bg-primary-600 text-white font-bold py-8 px-12 text-3xl rounded-full shadow-lg transition-all duration-300"
      :style="floatingButtonStyle"
      @click="handleClick"
    >
      <UIcon name="i-lucide-mouse-pointer-click" />
    </button>
  </div>
</template>

<script setup>
import { whenever } from '@vueuse/core';
import { ref } from 'vue';

const counter = ref(0);
const show = ref(false);

const floatingButtonStyle = ref({
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
  transition: 'top 0.3s ease-in-out'
});

let direction = 1;

const moveButton = () => {
  const currentTop = parseFloat(floatingButtonStyle.value.top);
  let newTop = currentTop + direction * 2;

  if (newTop > 80) {
    newTop = 80;
    direction = -1;
  } else if (newTop < 20) {
    newTop = 20;
    direction = 1;
  }

  floatingButtonStyle.value.top = `${newTop}%`;
  floatingButtonStyle.value.right = '20px';
  floatingButtonStyle.value.transition = 'top 0.3s ease-in-out';
};

const intervalId = ref(null);

whenever(show, () => {
  intervalId.value = setInterval(moveButton, 300);
});

onBeforeUnmount(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});

</script>
