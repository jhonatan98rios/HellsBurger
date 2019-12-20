import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Account from '../views/Account'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/acount',
        name: 'account',
        component: Account
    },
]

const router = new Router({ routes })

export default router