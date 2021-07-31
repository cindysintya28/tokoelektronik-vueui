import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Produks/Home.vue'
import Createproduks from '../views/Produks/Createproduks.vue'
import Editproduks from '../views/Produks/Editproduks.vue'
import Detailproduks from '../views/Produks/Detailproduks.vue'
import Createdetails from '../views/Details/Createdetails.vue'
import Detaildetails from '../views/Details/Detaildetails.vue'
import Details from '../views/Details/Details.vue'
import Editdetails from '../views/Details/Editdetails.vue'
import Createorders from '../views/Orders/Createorders.vue'
import Detailorders from '../views/Orders/Detailorders.vue'
import Editorders from '../views/Orders/Editorders.vue'
import Orders from '../views/Orders/Orders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createproduks',
    name: 'Createproduks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createproduks
  },
  {
    path: '/editproduks/:id',
    name: 'Editproduks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editproduks
  },
  {
    path: '/detailproduks/:id',
    name: 'Detailproduks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailproduks
  },
  {
    path: '/',
    name: 'Details',
    component: Details
  },
  {
    path: '/createdetails',
    name: 'Createdetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createdetails
  },
  {
    path: '/editdetails/:id',
    name: 'Editdetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editdetails
  },
  {
    path: '/detaildetails/:id',
    name: 'Detaildetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detaildetails
  },
  {
    path: '/',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/createorders',
    name: 'Createorders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createorders
  },
  {
    path: '/editorders/:id',
    name: 'Editorders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editorders
  },
  {
    path: '/detailorders/:id',
    name: 'Detailorders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailorders
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
