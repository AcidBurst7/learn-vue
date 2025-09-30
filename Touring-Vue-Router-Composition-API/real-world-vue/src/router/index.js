import EventListView from '@/views/EventListView.vue'
import EventLayout from '@/views/events/Layout.vue'
import EventDetails from '@/views/events/Details.vue'
import EventRegister from '@/views/events/Register.vue'
import EventEdit from '@/views/events/Edit.vue'
import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page || 1)})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        },
      ]
    },
  ],
})

export default router
