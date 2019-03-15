
<template>
<div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : ''}}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <BaseIcon name="map"><h2>Location</h2></BaseIcon>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <!-- Ternery conditional -->
    <!--
      if attendees array is not null, then we can run length , otherwise just return Zero
    -->
    <h2>Attendees
      <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
//import EventService from "@/services/EventService";

// import the mapState and mapActions helper 
//import {mapState , mapActions} from 'vuex'

// import NProgress from "nprogress";
//import store from "@/store/store";

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  // beforeRouteEnter (routeto, routefrom, next) { // called before component created 
  //   // start the progress bar before navigating to this component 
  //   NProgress.start();

  //   // call fetchEvent action , we don't have access to 'this' 
  //   // So, we need to import vuex store 
  //   store.dispatch('event/fetchEvent', routeto.params.id).then(() => {
  //     // when api returns the response, we want to finish the progress bar 
  //     NProgress.done(); 

  //     // call next() to continue navigating to the component
  //     next() 
  //   });
  //   //Note that fetchEvent action must return a promise here to fire the then() method

  // },
  data() {
    return {
      // event: {}  // single event object  
    }
  },
 // created() {
    // EventService.getEvent(this.id)
    // .then(response => { 


    //   //console.log(response.data);
    //   this.event = response.data;
    // })
    // .catch(error => {
    //   console.log("There is an error : "+error.response);
    // })

    //Dispatcher
    //console.log(this.id);
    //this.$store.dispatch('event/fetchEvent',this.id);

    // Dispatcher viz mapActions helper
    // call fetchEvent function and pass the prop id  
 //   this.fetchEvent(this.id);
    
 // },
  // computed: mapState({
  //   event : state => state.event.event
  // }),
 // methods: mapActions('event' , ['fetchEvent']) // mapActions(['even/fetchEvent'])
  // mapActions(namespace,['actionName'])  OR  mapActions(['namespace/action'])
}
</script>

<style scoped>

.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}

</style>