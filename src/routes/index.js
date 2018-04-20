import Vue from 'vue'
import Router from 'vue-router'
// 全加载
// import Index from '../components/Index'
// 懒加载
const Index = () => import('../components/Index.vue')
const Test = () => import('../components/Test.vue')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index
  },
  {
    path: '/test',
    component: Test
  }]
})