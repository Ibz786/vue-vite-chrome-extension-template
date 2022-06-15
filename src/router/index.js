import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  	history: createWebHistory(import.meta.env.BASE_URL),
  	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		},
        {
			path: '/contact',
			name: 'contact',
			component: () => import('../views/ContactView.vue')
		}
  	]
});

// Redirects route from index.html to '/' when initially load Extension
router.beforeEach((to) => {
    if(to.path === "/index.html") return '/';
});
export default router;