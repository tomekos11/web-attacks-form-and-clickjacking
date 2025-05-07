<template>
    <UCard class="max-w-md mx-auto mt-10">
        <form
      method="POST"
      action="http://localhost:5000/posts"
      enctype="multipart/form-data"
    >
        <UFormField label="Tytuł" name="title">
          <UInput v-model="form.title" placeholder="Podaj tytuł" />
        </UFormField>
  
        <UFormField label="Treść" name="content" class="mt-4">
          <UTextarea v-model="form.content" placeholder="Podaj treść posta" />
        </UFormField>
  
        <!-- <UFormField label="Nowy post?" name="isNew" class="mt-4">
          <UCheckbox v-model="form.isNew" />
        </UFormField> -->
  
        <UButton type="submit" class="mt-6" color="primary">Wyślij</UButton>
    </form >
    </UCard>
  </template>

<script setup lang="ts">

// const send = async () => {
//     try {
//         const res = await $fetch('http://localhost:5000/posts', {
//             method: 'post',
//             body: {
//                 content: 'aabc123',
//                 title: 'abc123',
//                 isNew: true,
//             },
//             credentials: 'include'
//         })
//         console.log(res)
//     } catch (err) {
//         console.error(err)
//     }
// }

const form = ref({
  title: '',
  content: '',
  isNew: true
})

const send = async (e) => {
  e.preventDefault()
  try {
    const res = await $fetch('http://localhost:5000/posts', {
      method: 'post',
      body: {
        title: form.value.title,
        content: form.value.content,
        isNew: form.value.isNew
      },
      credentials: 'include'
    })
    console.log(res)
    // Opcjonalnie: wyczyść formularz lub pokaż powiadomienie
    form.value = { title: '', content: '', isNew: true }
  } catch (err) {
    console.error(err)
  }
}
</script>