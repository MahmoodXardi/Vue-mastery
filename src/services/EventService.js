
import axios from 'axios';

// Create a single axios instance 
const apiClient = axios.create({
  baseURL: 'https://app-ninja-d580e.firebaseio.com',
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});


export default{
  getEvents(){
    return apiClient.get('/events.json');
  },
  // fetch a single event via id 
  getEvent(id){
    return apiClient.get('/events/'+ id + '.json');
    //return apiClient.get(`/events/{id}.json`);
  },
  postEvent(event){
    return apiClient.post('/events.json',event);
  }
}

