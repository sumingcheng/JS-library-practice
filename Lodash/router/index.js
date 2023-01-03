import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/App.vue')
    },
  ]
});
export default router;
