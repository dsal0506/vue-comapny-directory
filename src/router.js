import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import loginPage from '@/components/ loginPage.vue'
import NotFound from '@/components/ NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/login',name: 'Login' , component: loginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound' ,component: NotFound },
 
]



export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
