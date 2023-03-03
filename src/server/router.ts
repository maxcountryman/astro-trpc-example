import { initTRPC } from '@trpc/server';
import type { Context } from './context';
import { z } from "zod";

const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
  greeting: t.procedure.query(() => 'hello tRPC v10!'),
  foo: t.procedure
      .input(z.object({ x: z.string() }))
      .mutation(({ input }) => input.x),
});
export type AppRouter = typeof appRouter;
