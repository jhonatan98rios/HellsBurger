import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Account from '../views/Account'
import Ranking from '../views/Ranking'
import Bag from '../views/Bag'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: Ranking,
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
    {
        path: '/bag',
        name: 'bag',
        component: Bag
    },
]

const router = new Router({ routes })

export default router