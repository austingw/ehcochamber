import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string().min(2),
        email: z.string().min(5),
        password: z.string().min(8),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { data } = await ctx.supabase.auth.signUp({
        email: input.email,
        password: input.password,
      });

      await ctx.prisma.profile.create({
        data: {
          email: input.email,
          name: input.name,
          user: {
            connect: {
              id: data?.user?.id,
            },
          },
        },
      });
    }),
});
