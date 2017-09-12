import Vue from 'vue'
import Router from 'vue-router'
import 'babel-polyfill'

Vue.use(Router)
// 商友汇主页
const Homepage = resolve => require(['../pages/homepage/homePage'], resolve)
// 商家详情
const Shopinfo = resolve => require(['../pages/homepage/shopInfo'], resolve)
// 选择地址
const Addressarea = resolve => require(['../pages/homepage/addressArea'], resolve)

let routes = [
  // 商友汇主页
  {name: 'Homepage', path: '/', component: Homepage},
  // 商家详情
  {name: 'Shopinfo', path: '/shopinfo', component: Shopinfo},
  // 选择地址
  {name: 'Addressarea', path: '/addressarea', component: Addressarea}
]

const router = new Router({
  routes: routes
})

export default router
