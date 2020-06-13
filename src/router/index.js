import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sablona from '../views/Sablona.vue'
import Skryvani from '../views/Skryvani.vue'
import Atributy from '../views/Atributy.vue'
import CssTridy from '../views/CssTridy.vue'
import Vfor from '../views/Vfor.vue'
import Komponenty from '../views/Komponenty.vue'
import PropsEvents from '../views/PropsEvents.vue'
import Vmodel from '../views/Vmodel.vue'
import Computed from '../views/Computed.vue'
import Created from '../views/Created.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sablona',
    name: 'Sablona',
    component: Sablona
  },
  {
    path: '/skryvani',
    name: 'Skryvani',
    component: Skryvani
  },
  {
    path: '/atributy',
    name: 'Atributy',
    component: Atributy
  },
  {
    path: '/csstridy',
    name: 'CssTridy',
    component: CssTridy
  },
  {
    path: '/vfor',
    name: 'Vfor',
    component: Vfor
  },
  {
    path: '/komponenty',
    name: 'Komponenty',
    component: Komponenty
  },
  {
    path: '/props-events',
    name: 'PropsEvents',
    component: PropsEvents
  },
  {
    path: '/vmodel',
    name: 'Vmodel',
    component: Vmodel
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/created',
    name: 'Created',
    component: Created
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
