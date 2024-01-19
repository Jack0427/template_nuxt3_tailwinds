<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <NuxtLink to="/about">前往 About</NuxtLink>
      <!-- <NuxtLink :to="{ name: 'user', params: { id: 1 } }">前往 user</NuxtLink> -->
      <!-- <p @click="fn">go user</p> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
// const router = useRouter()
// function fn(): void {
//   router.push({ name: 'user', params: { id: 1 } })
// }
</script>
