<template>

  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  > 
  <div class="event-card -shadow">
    <span class="eyebrow"> @{{event.time}} on {{event.date}} </span>
    <h4 class="title"> {{event.title}} </h4>
    <BaseIcon name="users">
    <!-- slot -->
    {{event.attendees ?  event.attendees.length : 0}} attending 
    </BaseIcon>
  </div>
  </router-link>
</template>

<script>
  export default {     
     // recevie event as object, bcz events are array of objects, so we recevie each event object as props
    props: {
      event: Object
    },
    created() {
      //console.log(this.event);
    },
  }
 
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>