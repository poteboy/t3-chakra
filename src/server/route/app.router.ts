import { router, publicProcedure } from "../trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => "Hello World"),
});

export type AppRouter = typeof appRouter;
