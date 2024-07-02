import { createRouter, createWebHistory } from 'vue-router'
import AddressRegistration from '../views/AddressRegistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'address-registration',
      component: AddressRegistration
    },
    {
      path: '/address-list',
      name: 'address-list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddressList.vue')
    }
  ]
})

export default router
