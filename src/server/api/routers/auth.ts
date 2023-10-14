import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { data } = await ctx.supabase.auth.signUp({
        email: input.email,
        password: input.password,
      });

      await ctx.prisma.profile.create({
        data: {
          email: input.email,
          name: input.email,
          user: {
            connect: {
              id: data?.user?.id,
            },
          },
        },
      });
    }),
});
