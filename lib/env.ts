import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_PORT: z.number().default(3000),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_PORT: process.env.NEXT_PUBLIC_APP_PORT
    ? parseInt(process.env.NEXT_PUBLIC_APP_PORT, 10)
    : undefined,
});
