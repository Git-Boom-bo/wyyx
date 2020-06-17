import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'

Vue.use(VueRouter)
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/classify',
        component:Classify
    }
]