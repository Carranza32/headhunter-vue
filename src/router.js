import { createRouter, createWebHistory } from "vue-router";
import UserList from "./components/UserList.vue";
import UserDetail from "./components/UserDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: UserList
  },
  {
    path: "/user",
    name: "user",
    props: true,
    component: UserDetail
  },
];

const router = new createRouter({
    history: createWebHistory(),
    routes
});

export default router;