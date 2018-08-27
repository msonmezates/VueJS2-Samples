import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false

let app = null;
// Wait for firebase auth to initialize before creating the app
firebase.auth().onAuthStateChanged(() => {
  // initialize app if it's not created
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }

})


