import Vue from 'vue'
import Vuex from 'vuex'
//import EventService from "@/services/EventService";

// import vuex module 
import * as user from './modules/user';
import * as event from '@/store/modules/event';

// import notification module 
import * as notification from "@/store/modules/notification";

Vue.use(Vuex)

export default new Vuex.Store({
  // tell Vuex to use vuex modules
  modules: {
    user,  // use this module
    event,
    notification
  },
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
    // events: [],
    // event: {}
  },
  // mutations: {
  //   // event as payload
  //   ADD_EVENT(state,event){
  //     state.events.push(event);
  //   },
  //   SET_EVENTS(state,events){
  //     state.events = events;
  //   },
  //   SET_EVENT(state,event){
  //     state.event = event; 
  //   }
  // },
  // actions: {
  //   // event as payload
  //   createEvent({commit},event){
  //     return EventService.postEvent(event)
  //     .then(() => {
  //       // on success posting the event to DB, then commit the mutation 
  //       commit('ADD_EVENT',event);
  //     })
  //   },
  //   fetchEvents({commit},events){
  //     EventService.getEvents()
  //     .then(response => {
  //       let eventsArray = []; // temporary array  
        
  //       for (let key in response.data) {
  //         response.data[key].id = key;
  //         eventsArray.push(response.data[key]);
  //       }

  //       commit('SET_EVENTS',eventsArray);
  //     })
  //     .catch(error => {
  //       console.log("There is an error : "+error.response);

  //     });
  //   },
  //   fetchEvent({commit , getters},id){ // access our getters 

  //     let event = getters.getEventById(id);  // find this event 

  //     if(event) { // if we found it, commit the set event mutation  

  //       commit('SET_EVENT',event);

  //     } else { // not found the event, go fetch the event from DB

  //       EventService.getEvent(id)
  //         .then(response => { 
  //           commit('SET_EVENT',response.data);
  //         })
  //         .catch(error => {
  //           console.log("There is an error : "+error.response);
  //         })
  //     }



  //   }
  // },
  // getters:{
  //   getEventById: state => id => {
  //     return state.events.find(event => event.id === id);
  //   }
  // }
})

/* 
Notice we are loading the same data twice, the data pull from EventList is the same as the data 
we use on EventShow, 
so we doing 2 api calls for the same data , the better is do one api call rather than 2 api calls.

implement this via using Getter. 

*/