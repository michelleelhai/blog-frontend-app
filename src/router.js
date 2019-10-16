import Vue from "vue";
import Router from "vue-router";
import PostsIndex from "./views/PostsIndex.vue";
import PostsNew from "./views/PostsNew.vue";
import Test from "./views/Test.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import PostsShow from "./views/PostsShow";
import PostsEdit from "./views/PostsEdit.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/posts",
      name: "posts-index",
      component: PostsIndex
    },
    {
      path: "/posts/new",
      name: "posts-new",
      component: PostsNew
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/posts/:id",
      name: "posts-show",
      component: PostsShow
    },
    {
      path: "/posts/:id/edit",
      name: "posts-edit",
      component: PostsEdit
    }
  ]
});
