import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import student from '../views/studentStyem.vue';
import teacher from '../views/teacherStyem.vue';
import enter from '../components/Styem.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "学生管理系统",
    component: student
  },
  {
    path: "/teacher",
    name: "教师管理系统",
    component: teacher
  },
  {
    path: "/enter",
    name: "管理系统",
    component: enter
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
