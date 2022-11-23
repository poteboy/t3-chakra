import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";

import SuperJSON from "superjson";

const t = initTRPC.context<Context>().create();
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
