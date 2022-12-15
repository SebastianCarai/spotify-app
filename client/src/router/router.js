import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/me',
      name: 'userLogged',
      component: () => import('../views/UserLoggedView.vue')
    },
    
  ]
})

export default router
