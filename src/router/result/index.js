const Result = () => import('@views/result/Index.vue')

export default {
  name: 'result.index',
  path: 'r=:result',
  component: Result,
  meta: {
    layout: 'main'
  }
}
