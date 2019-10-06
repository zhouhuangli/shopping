import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['../views/index/index.vue'], resolve)
        }
    ]
})
