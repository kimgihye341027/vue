import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Cash from "@/views/Cash.vue";
import Reservation from "@/views/Reservation.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Review from "@/views/Review.vue";
import Menu1 from "@/views/Menu1.vue";
import Menu2 from "@/views/Menu2.vue";
import Menu3 from "@/views/Menu3.vue";
import Menu4 from "@/views/Menu4.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Cash", component: Cash },
  { path: "/Reservation", component: Reservation },
  { path: "/Login", component: Login },
  { path: "/Signup", component: Signup },
  { path: "/Review", component: Review },
  { path: "/Menu1", component: Menu1 },
  { path: "/Menu2", component: Menu2 },
  { path: "/Menu3", component: Menu3 },
  { path: "/Menu4", component: Menu4 },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
