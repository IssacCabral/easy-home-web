import { Button } from "@/components/ui/button";
import { SignUpHeader } from "./components/sign-up-header";
import { SignUpFooter } from "./components/sign-up-footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { NameFormItem } from "./components/form-items/name-form-item";
import { PhoneFormItem } from "./components/form-items/phone-form-item";
import { UserFormItem } from "./components/form-items/user-form-item";
import { EmailFormItem } from "./components/form-items/email-form-item";
import { PasswordFormItem } from "./components/form-items/password-form-item";
import { ConfirmPasswordFormItem } from "./components/form-items/confirm-password-form-item";

const signUpForm = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .max(65, "O nome deve ter no máximo 65 caracteres"),
    phone: z
      .string()
      .regex(
        /^\([1-9]{2}\) 9[0-9]{4}\-[0-9]{4}$/,
        "O número deve estar no formato (xx) 9xxxx-xxxx",
      ),
    user: z.enum(["landlord", "tenant"]),
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

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
    defaultValues: {
      name: "",
      phone: "",
      user: "tenant",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function handleSignUp(data: SignUpForm) {
    console.log("data in sign up:", data);
  }

  return (
    <div className="w-[360px] tracking-[-0.02em]">
      <SignUpHeader />
      <Form {...form}>
        <form
          className="mb-6 flex flex-col gap-2"
          onSubmit={form.handleSubmit(handleSignUp)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <NameFormItem field={field} fieldState={fieldState} />
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <PhoneFormItem field={field} fieldState={fieldState} />
            )}
          />
          <FormField
            control={form.control}
            name="user"
            render={({ field, fieldState }) => (
              <UserFormItem field={field} fieldState={fieldState} />
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <EmailFormItem field={field} fieldState={fieldState} />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <PasswordFormItem field={field} fieldState={fieldState} />
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <ConfirmPasswordFormItem field={field} fieldState={fieldState} />
            )}
          />
          <Button className="w-full" type="submit">
            Criar conta
          </Button>
        </form>
      </Form>
      <SignUpFooter />
    </div>
  );
}
