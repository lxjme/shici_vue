import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// import index from '@/components/index'
import author from '@/components/author/index'
import authorDetail from '@/components/author/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'author',
      component: author,
      meta: {
        title: '诗人'
      }
    },
    {
      path: '/author',
      name: 'author',
      component: author,
      meta: {
        title: '诗人'
      }
    },
    {
      path: '/author/detail_:id',
      name: 'author_detail',
      component: authorDetail,
      meta: {
        title: '诗人'
      }
    }
  ]
})
