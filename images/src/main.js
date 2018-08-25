import Vue from "vue";
import Router from 'vue-router';
import App from "./App";
import store from "./store";
import AuthHandler from '@/components/AuthHandler';
import ImageList from '@/components/ImageList';
import UploadForm from '@/components/UploadForm';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ImageList',
      component: ImageList
    },
    {
      path: '/upload',
      name: 'UploadForm',
      component: UploadForm
    },
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
