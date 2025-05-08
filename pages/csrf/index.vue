<template>
  <div class="space-y-10 max-w-xl mx-auto py-10">
    <!-- Sekcja 1: Dlaczego CSRF jest niebezpieczny -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">Dlaczego CSRF jest niebezpieczny?</h2>
      </template>
      <ul class="list-disc pl-6 space-y-2"> 
        <li> 
          CSRF (Cross-Site Request Forgery) pozwala atakującemu wykonać nieautoryzowane akcje w imieniu zalogowanego użytkownika, np. zmienić hasło, przelać pieniądze lub zmodyfikować dane konta. 
        </li>
        <li> 
          Atakujący wykorzystuje zaufanie aplikacji do przeglądarki użytkownika – jeśli użytkownik jest zalogowany, serwer nie odróżni prawdziwego żądania od spreparowanego przez atakującego. 
        </li> 
        <li> 
          Ofiara często nie wie, że padła ofiarą ataku, ponieważ wszystko dzieje się w tle, a działania wydają się pochodzić od niej. 
        </li>
        <li> 
          Skutki mogą być poważne: przejęcie konta, nieautoryzowane transakcje, wyciek danych lub całkowity kompromis aplikacji.
        </li>
      </ul>
    </UCard>

    <!-- Sekcja 2: Dlaczego CORS blokuje zwykłe zapytania JS -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">Dlaczego CORS blokuje zwykłe zapytania JS?</h2>
      </template>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          Przeglądarki stosują politykę Same-Origin Policy – domyślnie blokują żądania AJAX (np. fetch, axios) do innych domen, portów lub protokołów niż aktualnie odwiedzana strona.
        </li>
        <li>
          CORS (Cross-Origin Resource Sharing) to mechanizm, który pozwala serwerowi jawnie zezwolić na takie żądania, ustawiając odpowiednie nagłówki w odpowiedzi.
        </li>
        <li>
          Jeśli backend nie ustawi nagłówków CORS, przeglądarka zablokuje żądanie wysłane przez JS, nawet jeśli jest ono poprawne technicznie – użytkownik nie zobaczy odpowiedzi ani nie wykona akcji.
        </li>
        <li>
          Dzięki temu atakujący nie może wykonać zapytania AJAX do Twojego API z innej domeny, jeśli nie zezwolisz na to w konfiguracji serwera.
        </li>
        <li class="font-semibold text-yellow-700">
          Warto jednak pamiętać, że CORS chroni tylko przed częścią ataków CSRF – blokuje wyłącznie zapytania wykonywane przez JavaScript (np. fetch, axios) z innych domen. 
          <span class="font-normal">
            Nie blokuje jednak klasycznych ataków CSRF wykonywanych przez zwykłe formularze HTML, które mogą być wysłane z dowolnej strony, nawet bez CORS.
          </span>
        </li>
        <li>
          Dlatego najlepszą ochroną przed CSRF jest stosowanie dedykowanych tokenów CSRF po stronie serwera, a nie poleganie wyłącznie na CORS.
        </li>
      </ul>

      <UButton class="mt-2" @click="sendRequest">
        Wyślij zapytanie i sprawdź czy post zostanie dodany
      </UButton>
    </UCard>

    <!-- Sekcja 3: Przycisk wysyłający podatny formularz (CSRF) -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">Przykład podatności na CSRF</h2>
      </template>
      <div class="space-y-4">
        <p>
          Poniższy przycisk wysyła formularz jako zwykłe żądanie POST (np. z innej strony). Jeśli backend nie stosuje zabezpieczeń CSRF, taka akcja się powiedzie – nawet jeśli użytkownik nie kliknie nic na stronie docelowej.
        </p>
        <UButton @click="sendCsrfForm">
          Wykonaj atak CSRF
        </UButton>
        <div v-if="csrfSent" class="text-green-600 font-semibold">
          Formularz został wysłany! (CSRF powiódł się)
        </div>
      </div>
    </UCard>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const csrfSent = ref(false);

const sendRequest = async () => {
  try {
    const res = await $fetch('http://localhost:5000/posts', {
      method: 'post',
      body: {
        title: 'atak csrf',
        content: `zostales shakowany i ${Math.floor(Math.random() * 10000)}`,
      },
      credentials: 'include'
    });
    console.log(res);

  } catch (err) {
    console.error(err);
  }
};

const sendCsrfForm = () => {
  // Tworzymy i wysyłamy formularz POST (symulacja ataku CSRF)
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'http://localhost:5000/posts';
  form.target = '_blank';
  form.style.display = 'none';

  const title = document.createElement('input');
  title.name = 'title';
  title.value = 'atak csrf';

  const content = document.createElement('input');
  content.name = 'content';
  content.value = `zostales shakowany i ${Math.floor(Math.random() * 10000)}`;
  
  form.appendChild(title);
  form.appendChild(content);
  document.body.appendChild(form);
  form.submit();
  csrfSent.value = true;
};
</script>