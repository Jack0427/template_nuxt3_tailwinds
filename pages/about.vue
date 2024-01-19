<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-yellow-400">大家好！我是 Ryan</h1>
      <p class="my-8 text-3xl text-gray-600">這裡是 /about</p>
      <p>{{ count }}</p>
      <button @click="increment">+1</button>
    </div>
    <NuxtLink to="/">home</NuxtLink>
  </div>
</template>
<script setup></script>
