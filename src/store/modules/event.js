
import EventService from "@/services/EventService";

// All actions, mutations and getters will be namespaced under 'event'
export const namespaced = true; 

export const state = {
  events: [],
  event: {}
};

export const mutations =  {
  // event as payload
  ADD_EVENT(state,event){
    state.events.push(event);
  },
  SET_EVENTS(state,events){
    state.events = events;
  },
  SET_EVENT(state,event){
    state.event = event; 
  }
};

export const actions = {
  // event as payload
  createEvent({commit , dispatch},event){
    return EventService.postEvent(event)
    .then(() => {
      // on success posting the event to DB, then commit the mutation 
      commit('ADD_EVENT',event);

      // success notification 
      const notification = {
        //type: 'success',
        type: 'primary',
        message: 'Your event has been created successfuly!'
      }  
      dispatch('notification/add',notification , {root: true});
    })
    .catch(error => {
      const notification = {
        type: 'error',
        message: 'There was a problem creating your event: ' + error.message 
      } 

      dispatch('notification/add',notification , {root: true});
      
      // throw an error, sendin an error bcz we need to propagate it to our component
      // throw that error that we caught on our vue component  
      throw error 
    });
  },
  fetchEvents({commit , dispatch},events){
    EventService.getEvents()
    .then(response => {
      let eventsArray = []; // temporary array  
      
      for (let key in response.data) {
        response.data[key].id = key;
        eventsArray.push(response.data[key]);
      }

      commit('SET_EVENTS',eventsArray);
    })
    .catch(error => {
      // console.log("There is an error : "+error.response);
      
      // error notification
      // use notification module to handle errors
      // create notification const object 
      const notification = {
        type: 'error',
        message: 'There was a problem fetching events: ' + error.message 
      }  
      dispatch('notification/add',notification , {root: true});
    });
  },
  fetchEvent({commit , getters , dispatch},id){ // access our getters 

    let event = getters.getEventById(id);  // find this event 

    if(event) { // if we found it, commit the set event mutation  

      commit('SET_EVENT',event);

    } else { // not found the event, go fetch the event from DB

      EventService.getEvent(id)
        .then(response => { 
          commit('SET_EVENT',response.data);
        })
        .catch(error => {
          // console.log("There is an error : "+error.response);

          const notification = {
            type: 'error',
            message: 'There was a problem fetching event: ' + error.message 
          }  
          dispatch('notification/add',notification , {root: true});
        })
    }



  }
};

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id);
  }
};