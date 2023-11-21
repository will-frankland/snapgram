import * as z from "zod";

export const signupValidation = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  username: z.string().min(2, { message: "Username too short" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
});

export const signinValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
});