<template lang="pug">
.bg-white.py-24 
  .flex.flex-col.items-center
    h1(class="text-6xl font-semibold text-gray-800") 這裡是首頁
    NuxtLink(to="/about") 前往 {{ $t('about') }}
    I18nChange
    button(@click="counterStore.increment") +{{ 1 }}
    p {{ counterStore.doubleCount }}
    el-button click
    
</template>
<script setup>
import { ElButton } from 'element-plus'
import { useCounterStore } from '@/stores/countes'
// import { getAnnouncement } from '@/api/login'
// const router = useRouter()
// router.push({ name: 'user-id', params: { id: 1 }, query: { id: 1 } })
const counterStore = useCounterStore()
// const { public: env } = await useRuntimeConfig()
// const getAn = async () => {
//   try {
//     const res: any = await getAnnouncement({
//       lang: 'tw',
//       marquee: 'true',
//       page: 1,
//       size: 3
//     })
//   } catch (error) {
//     console.error(error)
//   }
// }
// getAn()
const { moment } = useMoment()
console.log(moneyFormat(100000, 3))
</script>
