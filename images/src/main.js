import Vue from "vue";
import Router from 'vue-router';
import App from "./App";
import store from "./store";
import AuthHandler from '@/components/AuthHandler';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      name: 'AuthHandler',
      component: AuthHandler
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
