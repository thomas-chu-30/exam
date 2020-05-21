import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "exam",
    component: () => import("../views/exam.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
