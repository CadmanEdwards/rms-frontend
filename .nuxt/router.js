import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _81082226 = () => interopDefault(import('..\\pages\\forgotPassword.vue' /* webpackChunkName: "pages/forgotPassword" */))
const _878431ac = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _86b9d252 = () => interopDefault(import('..\\pages\\resetPassword\\index.vue' /* webpackChunkName: "pages/resetPassword/index" */))
const _0aeba75f = () => interopDefault(import('..\\pages\\roles_permissions\\index.vue' /* webpackChunkName: "pages/roles_permissions/index" */))
const _38001e49 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _5d875bc5 = () => interopDefault(import('..\\pages\\resetPassword\\_token.vue' /* webpackChunkName: "pages/resetPassword/_token" */))
const _c4ac14f2 = () => interopDefault(import('..\\pages\\roles_permissions\\_id.vue' /* webpackChunkName: "pages/roles_permissions/_id" */))
const _1ad377da = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/forgotPassword",
    component: _81082226,
    name: "forgotPassword"
  }, {
    path: "/login",
    component: _878431ac,
    name: "login"
  }, {
    path: "/resetPassword",
    component: _86b9d252,
    name: "resetPassword"
  }, {
    path: "/roles_permissions",
    component: _0aeba75f,
    name: "roles_permissions"
  }, {
    path: "/users",
    component: _38001e49,
    name: "users"
  }, {
    path: "/resetPassword/:token",
    component: _5d875bc5,
    name: "resetPassword-token"
  }, {
    path: "/roles_permissions/:id",
    component: _c4ac14f2,
    name: "roles_permissions-id"
  }, {
    path: "/",
    component: _1ad377da,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
