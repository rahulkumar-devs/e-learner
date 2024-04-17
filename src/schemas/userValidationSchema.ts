import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signupSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleasr 6 character" }),
});

//  VerifySchema

export const verifySchema = z.object({
  code: z.string().length(6, "verification code must be 6 digits"),
});

// signinSchema

export const signinSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});

// Accepting message
export const acceptingMessageSchema = z.object({
  acceptMessage: z.boolean(),
});

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "message must be at least of 10 character" })
    .max(300, { message: "content must be no longer than 300 characters" }),
});
