const Router = () => import('@layouts/RouterViewer')

const routes = []

export default {
  path: '/',
  redirect: { name: 'scan.index' },
  component: Router,
  meta: {
    layout: 'main'
  },
  children: routes
}
