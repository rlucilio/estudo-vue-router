import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/home',
    component: Home
}, {
    name: 'About',
    path: '/about',
    component: () => import('../views/About.vue')
}, {
    name: '',
    path: '/',
    redirect: '/home'
}, {
    name: '**',
    path: '**',
    redirect: '/home'
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router