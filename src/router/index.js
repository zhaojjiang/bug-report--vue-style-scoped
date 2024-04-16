import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/page-a',
    name: 'page.a',
    component: () => import(/* webpackChunkName: 'page-a' */'../views/PageA.vue'),
  },
  {
    path: '/page-b',
    name: 'page.b',
    component: () => import(/* webpackChunkName: 'page-b' */'../views/PageB.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
