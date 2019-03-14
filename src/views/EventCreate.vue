
<template>
  <div>
    <!-- Access state -->
    <!--  <h1>Create Event, Creator: {{ $store.state.user.name }} </h1> -->
    <!-- Access state in multiple places via using computed property -->
    <!-- <h1>Create an Event, Creator: {{ userName }} </h1>  -->
    
    <!--  -->
    <!-- form to creat an event -->
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<<script>
// import Datepicker
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    // add algorithm for out times data
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories : this.$store.state.categories,
      event: this.createFreshEventObject() // event object hold a method 
    }
  },
  methods: {
    createEvent(){
      // Dispatcher 
      this.$store.dispatch('event/createEvent',this.event).then(()=>{

        this.$router.push({
          name: 'event-list',
          // name: 'event-show',
          // params: {id: this.event.id}
        }); 
        // on success 
        // onle clear or reset event object when API call responds from our action is returned 
        // reset event data object only when event has been successfully added to DB 
        this.event = this.createFreshEventObject();
      }).catch(()=> {
        //console.log('There was a problem creating your event');

        // 
      })
      
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);

      // return an event object 
      return {
        id: id,
        user: user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  },
  computed: {
    // userName() {
    //   return this.$store.state.user.name; 
    // }
  }
  
}
</script>


<style scopeds>
.field {
  margin-bottom: 24px;
}
</style>