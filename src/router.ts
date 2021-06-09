import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

interface Test {
	meta: {
		title?: string;
	}
}
type MyRoute = RouteRecordRaw & Test

import Index from '@/pages/index.vue';


const routes: MyRoute[] = [
  { path: '/', component: Index, meta: {} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;