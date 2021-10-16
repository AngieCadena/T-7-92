import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/BlogList'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home')
    },
    {
      path: '/blog-list',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
