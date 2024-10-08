import { z } from "zod";

export const signInForm = z.object({
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export type SignInForm = z.infer<typeof signInForm>;

export const defaultValues: SignInForm = {
  email: "",
  password: "",
};
