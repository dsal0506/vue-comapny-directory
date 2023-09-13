<template>
  <div class="pagination">
    <button class="action" :disabled="activePage.value === 1" @click="prevPage">Prev</button>
    <button class="page" v-for="page in pages.value" :class="page === activePage.value ? 'active' : ''" @click="activePage.value = page">
      {{ page }}
    </button>
    <button class="action" :disabled="activePage.value === pages.value" @click="nextPage">Next</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const pages = ref(10)
  const activePage = ref(4)

  const prevPage = () => {
    if (activePage.value > 1) {
      activePage.value--
    }
  }

  const nextPage = () => {
    if (activePage.value < pages.value) {
      activePage.value++
    }
  }
</script>

<style lang="postcss" scoped>
  .pagination {
    @apply flex justify-center gap-4;
    .action {
      @apply rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md hover:bg-slate-200 disabled:text-slate-400 hover:disabled:bg-slate-100;
    }
    .page {
      @apply rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md hover:bg-slate-200;
      &.active {
        @apply bg-yellow-700 text-slate-100 hover:bg-yellow-600;
      }
    }
  }
</style>
