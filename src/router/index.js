import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login";
import Home from "@/views/Home";
import store from "@/store";
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async ({name, meta}, from, next) => {
  if (name !== "login" && meta?.auth) {
    await store.dispatch('check_login', next)
  }
  else {
    next()
  }
})

export default router

