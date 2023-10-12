import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.supabase.auth
        .signUp({
          email: input.email,
          password: input.password,
        })
        .catch((error) => {
          console.log("ERRRORRRRR", error);
        })
        .then((response) => {
          console.log("HERE IT IS THE RESPONSE", response);
          return response?.data;
        });
    }),
});
