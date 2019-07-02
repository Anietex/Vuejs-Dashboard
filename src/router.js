import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from "./views/Dashboard";
import AppLayout from "./components/layouts/AppLayout";
import User from "./views/User";
import Login from "./views/Login";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      name: 'dashboard',
      component: AppLayout,
      children: [

        {
          path: '/',
          component: Dashboard,
          name: 'dashboard'
        },
        {
          path:'user',
          component: User
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
