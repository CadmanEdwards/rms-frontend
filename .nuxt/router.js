import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _22045e31 = () => interopDefault(import('..\\pages\\device_registration.vue' /* webpackChunkName: "pages/device_registration" */))
const _18ffb37f = () => interopDefault(import('..\\pages\\forgotPassword.vue' /* webpackChunkName: "pages/forgotPassword" */))
const _4e595658 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5c53b4a7 = () => interopDefault(import('..\\pages\\recover_user.vue' /* webpackChunkName: "pages/recover_user" */))
const _16c4c2b5 = () => interopDefault(import('..\\pages\\recover_user_code.vue' /* webpackChunkName: "pages/recover_user_code" */))
const _1891a5e9 = () => interopDefault(import('..\\pages\\resetPassword\\index.vue' /* webpackChunkName: "pages/resetPassword/index" */))
const _c00f451e = () => interopDefault(import('..\\pages\\roles_permissions\\index.vue' /* webpackChunkName: "pages/roles_permissions/index" */))
const _6bc8e512 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _7f6aaef3 = () => interopDefault(import('..\\pages\\resetPassword\\_token.vue' /* webpackChunkName: "pages/resetPassword/_token" */))
const _8f9defce = () => interopDefault(import('..\\pages\\roles_permissions\\_id.vue' /* webpackChunkName: "pages/roles_permissions/_id" */))
const _f69c997e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/device_registration",
    component: _22045e31,
    name: "device_registration"
  }, {
    path: "/forgotPassword",
    component: _18ffb37f,
    name: "forgotPassword"
  }, {
    path: "/login",
    component: _4e595658,
    name: "login"
  }, {
    path: "/recover_user",
    component: _5c53b4a7,
    name: "recover_user"
  }, {
    path: "/recover_user_code",
    component: _16c4c2b5,
    name: "recover_user_code"
  }, {
    path: "/resetPassword",
    component: _1891a5e9,
    name: "resetPassword"
  }, {
    path: "/roles_permissions",
    component: _c00f451e,
    name: "roles_permissions"
  }, {
    path: "/users",
    component: _6bc8e512,
    name: "users"
  }, {
    path: "/resetPassword/:token",
    component: _7f6aaef3,
    name: "resetPassword-token"
  }, {
    path: "/roles_permissions/:id",
    component: _8f9defce,
    name: "roles_permissions-id"
  }, {
    path: "/",
    component: _f69c997e,
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
