import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Fabian from '../views/FabianPage.vue';
const routes = [
  { path: '/', name: 'HomePage', component: Home },
  { path: '/fabian', name: 'FabianPage', component: Fabian },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
