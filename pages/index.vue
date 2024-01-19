<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <NuxtLink to="/about">前往 About</NuxtLink>
      <p>{{ count }}</p>
      <button @click="increment">+1</button>
      <!-- <NuxtLink :to="{ name: 'user', params: { id: 1 } }">前往 user</NuxtLink> -->
      <!-- <p @click="fn">go user</p> -->
    </div>
  </div>
</template>
<script setup>
// const router = useRouter()
// router.push({ name: 'user-id', params: { id: 1 }, query: { id: 1 } })
if (process.client) {
  console.log(localStorage)
}
</script>
