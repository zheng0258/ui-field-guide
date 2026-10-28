import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./pages/HomePage.vue') },
  { path: '/:platform', name: 'platform', component: () => import('./pages/PlatformPage.vue') },
  { path: '/:platform/:id', name: 'component', component: () => import('./pages/ComponentPage.vue') },
  { path: '/:path(.*)*', name: 'not-found', component: () => import('./pages/NotFoundPage.vue') },
]
