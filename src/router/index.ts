import { createRouter, createWebHistory } from "vue-router";

import { allRoutes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...allRoutes,
    {
      path: "/:catchAll(.*)",
      redirect: "/not-found",
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
