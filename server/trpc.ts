import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export function createTRPCContext() {
  return {};
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

