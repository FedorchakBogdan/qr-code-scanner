import routeImporter from '@plugins/importers/routeImporter'
import RouteMerger from '@plugins/importers/RouteMerger'
const Router = () => import('@layouts/RouterViewer')

const routes = []

new RouteMerger(routes).add(
  // eslint-disable-next-line no-undef
  routeImporter(require.context('./result/', false, /.*\.js$/))
)

export default {
  path: '/result',
  component: Router,
  meta: {
    layout: 'main'
  },
  children: routes
}
