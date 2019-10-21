import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Movie from '@/components/movie'
import Subject from '@/components/subject'
import Doulist from '@/components/doulist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'/movie',
          component:Movie,
        },
        {
          path: 'subject',
          component: Subject,
        },

      ]
    },
    {
      path:'/doulist',
      component:Doulist
    },
    {
      path: '/*',
      redirect:'/movie',
    }
  ]
})
