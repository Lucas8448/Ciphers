import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Portal from '../views/Portal.vue'
import Notfound from '../views/Notfound.vue'
import Friends from '../views/portal/Friends.vue'
import Home from '../views/portal/Home.vue'
import Profile from '../views/portal/Profile.vue'
import Settings from '../views/portal/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/portal',
      name: 'portal',
      component: Portal,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'friends',
          component: Friends
        },
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'settings',
          component: Settings
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: Notfound
    }
  ]
})

export default router
