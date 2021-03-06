import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import System from '@/pages/system/Index'
import Department from '@/pages/system/Department'

Vue.use(Router)

/**
 * 异步加载路由模块(提高首屏渲染速度)
 * Node: 除了默认选中的路由模块不进行拆分
 * 默认选中的路由模块又Home 与 System
 */
const Tags = resolve => {
  import('@/pages/tags/Index').then(module => {
    resolve(module)
  })
}

const Peoples = resolve => {
  import('@/pages/peoples/Index').then(module => {
    resolve(module)
  })
}

const Services = resolve => {
  import('@/pages/services/Index').then(module => {
    resolve(module)
  })
}

const User = resolve => {
  import('@/pages/system/User').then(module => {
    resolve(module)
  })
}

const Menu = resolve => {
  import('@/pages/system/Menu').then(module => {
    resolve(module)
  })
}

const Role = resolve => {
  import('@/pages/system/Role').then(module => {
    resolve(module)
  })
}

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    // default show system-manager moduele
    redirect: '/system-manager',
    children: [{
      path: 'system-manager',
      component: System,
      children: [{
        path: 'department',
        component: Department,
      }, {
        path: 'user',
        component: User
      }, {
        path: 'menu',
        component: Menu
      }, {
        path: 'role',
        component: Role
      }]
    }, {
      path: 'tags-manager',
      component: Tags
    }, {
      path: 'peoples-manager',
      component: Peoples
    }, {
      path: 'services-manager',
      component: Services
    }]
  }]
})
