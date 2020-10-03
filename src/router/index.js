import Vue from "vue";
import VueRouter from "vue-router";
import Start from "@/components/Start.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start
  },
  {
    path: "/Header",
    name: "Header",
    component: () => import("@/components/Header.vue")
  },
  {
    path: "/QuestionsBox",
    name: "QuestionsBox",
    component: () => import("@/components/QuestionsBox.vue")
  },
  {
    path: "/Game",
    name: "Game",
    component: () => import("@/views/Game.vue")
  },
  {
    path: "/Finish",
    name: "Finish",
    component: () => import("@/components/Finish.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
