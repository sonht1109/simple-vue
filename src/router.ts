import * as VueRouter from "vue-router";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
