import { createWebHashHistory, createRouter } from "vue-router";
import HomeComponent from "./components/Home/HomeComponent";
const routes = [
  {
    name: "HomeComponent",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "products",
    path: "/products",
    component: HomeComponent,
  },
  {
    name: "products",
    path: "/product",
    component: HomeComponent,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
