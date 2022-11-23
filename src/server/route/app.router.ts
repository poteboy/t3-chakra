import { createRouter } from "../router";

export const appRouter = createRouter().query("hello", {
  resolve: () => "Hello",
});

export type AppRouter = typeof appRouter;
