import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList'
import EventCreate from './views/EventCreate'
import EventShow from './views/EventShow'

// include NProgress library 
import NProgress from "nprogress";

// iclude store 
import store from "@/store/store";

Vue.use(Router)

// need to store the router in a constant to use global guards 
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true,
      beforeEnter(routeTo, routefrom, next){
        store.dispatch('event/fetchEvents').then(events => {
          routeTo.params.events = events;
          next(); 
        })
      }
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      // id = dynamic segment 
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props:true,
      // per-route guard
      beforeEnter(routeTo, routefrom , next){
          store.dispatch('event/fetchEvent', routeTo.params.id).then((event)=>{
            // Receives event from fetchEvent action  
            // after receive event, store it as a parameter 
            routeTo.params.event = event;  // params.event sent as prop to EventShow 

            // Once action is done, continue navigating so call next() 
            next();
          })
      }
    }
  ]
})

// Global Guards
// before each route 
router.beforeEach((routeto, routefrom, next) => {
  // start progress bar 
  NProgress.start();
  next();
})

// after each route 
router.afterEach((routeto, routefrom)=> {
  // finish progress bar 
  NProgress.done();
})

export default router;


