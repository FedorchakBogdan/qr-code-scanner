import Vue from 'vue'
import Router from 'vue-router'
import routeImporter from './plugins/importers/routeImporter'
import RouteMerger from './plugins/importers/RouteMerger'
import before from './middleware/before'
Vue.use(Router)
const routes = []

new RouteMerger(routes).add(
  // eslint-disable-next-line no-undef
  routeImporter(require.context('./router', false, /.*\.js$/))
)

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach(before)

export default router
