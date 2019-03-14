
<template>
  <div>
    <h1>Event for {{user.user.name}} </h1> <!-- moduleName.stateName.propertyName -->
 
    
    <paginate name="eventCards" v-bind:list="event.events" :per="3">
      <EventCard v-for="event in paginated('eventCards')" :key="event.id" :event="event"></EventCard>
     
     </paginate>

    <paginate-links
    class="paginatelinks"
      for="eventCards"
     :simple="{
        next: 'Next »',
        prev: '« Back'
      }"
    ></paginate-links>
   

    <!-- itrate throught events array, then send each event as prop to EventCard component 
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>-->
    
   
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
//import axios from "axios";
//import EventService from "@/services/EventService";

import {mapState} from 'vuex';

export default {
  components: {
    //locally register EventCArd vue component 
    EventCard
  },
  data() {
    return {
      //events: []
      // register the name of our paginated list and called eventCards
      paginate: ["eventCards"]
    }
  },
  created(){
    // axios
    //   .get("https://app-ninja-d580e.firebaseio.com/events.json")
    //   .then(response => {
    //     // console.log(response.data);
    //     this.events = response.data;
    //   })
    //   .catch(error => {
    //     console.log("There is an error : "+error.response);
    //   })

    // EventService Way 
    // EventService.getEvents()
    //   .then(response => {
        //console.log(response.data); //--> fetch as object 
        //this.events = response.data; 
        
        //console.log(response.data); 
        // return an object { UniqueKey:{} , UniqueKey:{} , UniqueKey:{}, UniqueKey:{} }

        // let eventsArray = []; // temporary array  
        
        // for (let key in response.data) {
        //   //console.log(response.data[key]);
          
        //   response.data[key].id = key;
        //   eventsArray.push(response.data[key]);
        // }

        //console.log(eventsArray);
       // this.events = eventsArray;

      // convert object to array 
      // let listOfObjects = Object.keys(response.data).map(key => {
      //   return response.data[key];
      // });
      // console.log(listOfObjects);  --> fetch as array 
      //this.events = listOfObjects;

      // })
      // .catch(error => {
      //   console.log("There is an error : "+error.response);
      // })


      // fetch data via vuex 
      this.$store.dispatch('event/fetchEvents');
  },
  computed: mapState(['event','user'])
}
</script>

<style>

ul.paginate-links > li.prev , ul.paginate-links > li.next {
  list-style-type: none;
  display: inline;
  margin: 0 10px;
  cursor: -webkit-grab; 
  cursor: grab;
}

ul.paginate-links > li.disabled > a {
  color: #ccc;
  cursor: no-drop;
}

ul.paginate-links  > li.next:before {
    content: "| ";
    margin-right: 13px;
    color:#ddd;
  }

</style>