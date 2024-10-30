import { z } from "zod";

export const signUpForm = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .max(65, "O nome deve ter no máximo 65 caracteres"),
    phone: z.string().regex(/^\([1-9]{2}\) 9[0-9]{4}\-[0-9]{4}$/, "O número deve estar no formato (xx) 9xxxx-xxxx"),
    user: z.enum(["landlord", "tenant"], {
      message: "Selecione o tipo de usuário",
    }),
    email: z.string().email("Formato de email inválido"),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .max(30, "A senha deve ter no máximo 30 caracteres")
      .regex(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "A senha é muito fraca, deve conter letras maiúsculas, minúsculas e números ou símbolos especiais",
      ),
    confirmPassword: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .max(30, "A senha deve ter no máximo 30 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignUpForm = Pick<
  z.infer<typeof signUpForm>,
  "confirmPassword" | "email" | "name" | "phone" | "password"
> & {
  user: "tenant" | "landlord" | "";
};

export const defaultValues: SignUpForm = {
  name: "",
  phone: "",
  user: "",
  email: "",
  password: "",
  confirmPassword: "",
};
