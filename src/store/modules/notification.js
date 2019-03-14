
export const namespaced = true;

export const state = {
  // notifications error collector 
  notifications: []
}

let nextId = 1 ; 

export const mutations = {
  // add or remove that notification from notifications array
  PUSH(state,notification ){
    // add or push notify to notification array
    // use object destructuring , when we push new notification, we can add an id to it 
    state.notifications.push({
      ...notification,
      id: nextId++
    });
  },
  DELETE(state, notificationToRemove){
    state.notifications = state.notifications.filter(notification => 
      notification.id !== notificationToRemove.id 
    );
  } 
}

export const actions = {
  add({commit}, notification){
    commit('PUSH',notification);
  },
  remove({commit}, notificationToRemove){
    commit('DELETE',notificationToRemove);
  }
}