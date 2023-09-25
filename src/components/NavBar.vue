<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const auth = useAuth()
  const brand = ref('🏫 Directory Lookup')
</script>

<template>
  <nav>
      <div class="wrapper">
        <RouterLink :to="{name: 'Home'}" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-item">Department</RouterLink>
      <div v-if="isAuthenticated">
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-item">Setings</RouterLink>
        <button href="#" class="menu-logout" @click="logout">Logout</button>
      </div>
        <div v-else>
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-login">Login</RouterLink>
      </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
  nav {
    @apply flex h-20 bg-blue-500 text-slate-200;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-3xl font-bold text-gray-800;
        }
      }
      .menu {
        @apply flex gap-2;
        &-item {
          @apply rounded-md px-4 py-2 hover:bg-yellow-500 hover:text-slate-900;
        }
        &-login {
          @apply rounded-md bg-green-500 px-4 py-2 text-red-100 hover:bg-green-500;
        }
        &-logout {
          @apply rounded-md bg-red-500 px-4 py-2 text-red-100 hover:bg-red-700;
        }
      }
    } 
  }

</style>