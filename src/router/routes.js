import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Car from '../pages/Car/Car.vue'
import Person from '../pages/Person/Person.vue'
import Login from '../pages/Login/Login.vue'
import ClassifyList from '../pages/Classify/ClassifyList/ClassifyList.vue'

export default [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {   
        name:'classify',
        path:'/classify',
        component:Classify,
        children:[
            {
                path:'classifyList',
                component:ClassifyList
            }
        ]
    },
    {
        name:'shopping',
        path:'/shopping',
        component:Shopping
    },
    {
        name:'car',
        path:'/car',
        component:Car
    },
    {
        name:'person',
        path:'/person',
        component:Person
    },
    {
        name:'login',
        path:'/login',
        component:Login
    }
    
]
