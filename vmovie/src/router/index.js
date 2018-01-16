import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Play from '@/pages/play'
import News from '@/pages/news'
import Movies from '@/pages/movies'
import Tvs from '@/pages/tvs'
import Search from '@/pages/search'

Vue.use(Router)


const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: { keepAlive: true }
     
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { keepAlive: true }
      
     
    },
     {
      path: '/play/:id',
      name: 'play',
      component: Play,
      beforeEnter: (to, from, next) => {
             window.scroll(0, 0);

             next()
      }
      
    },
    
    {
      path: '/movies',
      name: 'movies',
      component: Movies,
      meta: { keepAlive: true },
      beforeEnter: (to, from, next) => {
             window.scroll(0, 0);

             next()
      }
    },
    {
      path: '/tvs',
      name: 'tvs',
      component: Tvs,
      meta: { keepAlive: true },
      beforeEnter: (to, from, next) => {
             window.scroll(0, 0);

             next()
      }
    }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //       console.log(savedPosition)
  //       if (savedPosition) {
  //   return savedPosition
  // } else {
  //   if (from.meta.keepAlive) {
  //       　　from.meta.savedPosition = document.body.scrollTop;
  //       }
  //   return { x: 0, y: to.meta.savedPosition ||0}
  // }
  // }
})


// router.beforeEach((to, from, next) => {
// window.scroll(0, 0);

// next()
// })


export default router