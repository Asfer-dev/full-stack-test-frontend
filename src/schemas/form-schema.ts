import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z.string().email(),
  dob: z.string().date(),
  department: z.string().min(1, { message: "Department is required" }),
  comments: z.string().optional(),
});
