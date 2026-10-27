import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./pages/HomePage.vue') },
  { path: '/c/:id', name: 'concept', component: () => import('./pages/ConceptPage.vue') },
  { path: '/:path(.*)*', name: 'not-found', component: () => import('./pages/NotFoundPage.vue') },
]
