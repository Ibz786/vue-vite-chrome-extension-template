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
            // Redirects route from index.html to '/' when initially load Extension
            path: '/index.html',
            redirect: '/'
        },
        {
            // Redirects route from index.html to '/' when initially load Extension
            path: '/popup.html',
            redirect: '/'
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

export default router;