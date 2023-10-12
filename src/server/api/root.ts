import { authRouter, exampleRouter } from "@/server/api/routers/auth";
import { createTRPCRouter } from "@/server/api/trpc";
import { audio } from "./routers/audio";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  signup: authRouter.signUp,
  audio: audio,
});

// export type definition of API
export type AppRouter = typeof appRouter;
