import routeImporter from '@plugins/importers/routeImporter'
import RouteMerger from '@plugins/importers/RouteMerger'
const Router = () => import('@layouts/RouterViewer')

const routes = []

new RouteMerger(routes).add(
  // eslint-disable-next-line no-undef
  routeImporter(require.context('./scan/', false, /.*\.js$/))
)

export default {
  path: '/scan',
  component: Router,
  meta: {
    layout: 'main'
  },
  children: routes
}
