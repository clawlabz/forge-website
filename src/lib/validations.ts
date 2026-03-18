import { z } from "zod";

export const waitlistSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .max(254, "Email too long")
    .transform((v) => v.toLowerCase().trim()),
  plan_interest: z
    .enum(["free", "pro", "unlimited", "hosted"])
    .nullable()
    .optional(),
  source_page: z
    .string()
    .max(100)
    .regex(/^\/[\w\-./]*$/, "Invalid path")
    .optional()
    .default("/"),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
