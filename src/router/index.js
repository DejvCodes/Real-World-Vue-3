import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetails,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router