import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import Chat from "@/components/Chat";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      // beforeEnter is the route guard function
      beforeEnter: (to, from, next) => {
        // if name exists, redirect to chat page
        if (to.params.name) {
          next();
        } else {
          // otherwise stay in home page
          next({ name: "Welcome" });
        }
      }
    }
  ]
});
