import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/index.vue';
import Overview from '../views/Overview/index.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/overview',
    component: Overview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
//   linkExactActiveClass: "exact-active",
  routes,
});

export default router;