import Vue from 'vue'

import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/login/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/', component: Home }
  ] // 配置路由规则
})
export default router
