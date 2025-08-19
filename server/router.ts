import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc";

export const appRouter = router({
  health: publicProcedure.query(() => ({ ok: true })),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1),
          lastName: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional().or(z.literal("")),
          subject: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        // TODO: send email or persist in DB; for now, log it
        console.log("Contact submission:", input);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

