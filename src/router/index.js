// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/customers",
        name: "Customers",
        component: () => import("@/views/Customers.vue"),
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("@/views/Products.vue"),
      },
      {
        path: "/income",
        name: "Income",
        component: () => import("@/views/Income.vue"),
      },
      {
        path: "/promotes",
        name: "Promote",
        component: () => import("@/views/Promote.vue"),
      },
      {
        path: "/help",
        name: "Help",
        component: () => import("@/views/Help.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
