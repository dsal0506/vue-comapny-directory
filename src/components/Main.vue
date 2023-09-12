<script setup>
import MainSearch from '@/components/MainSearch.vue'
  
</script>


<template>
  <div class="wrapper"></div>
  <MainSearch />
  <h1>Hello There</h1>
</template>

<style scoped lang="postcss">
  .wrapper{
    @apply flex flex-col container  mx-auto py-4 gap-4;
  }

</style>