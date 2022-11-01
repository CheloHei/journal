import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'

import authRouter from '../modules/auth/router'
import daybookRouter from '../modules/daybook/router'

const routes = [
  {
    path: '/',
    beforeEnter:[isAuthenticatedGuard],
    ...daybookRouter
  },
  {
    path: '/auth',
    ...authRouter
  },
  // {
  //   path: '/daybook',
  //   beforeEnter:[isAuthenticatedGuard],
  //   ...daybookRouter
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
