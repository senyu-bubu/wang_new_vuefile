import Vue from 'vue'
import Router from 'vue-router'
// import First from '@/components/first/First'
import todos from '@/components/todos/todos'


Vue.use(Router)

export default new Router({
  routes: [
{
        // path:'/first',
        // name:'First',
        // component:First
        path:'/todos',
        name:'todos',
        component:todos
    }
  ]
})
