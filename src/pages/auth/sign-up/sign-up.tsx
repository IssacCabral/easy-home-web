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

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  user: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
    defaultValues: {
      name: "",
      phone: "",
      user: "",
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
            render={({ field }) => <NameFormItem field={field} />}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => <PhoneFormItem field={field} />}
          />
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => <UserFormItem field={field} />}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => <EmailFormItem field={field} />}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => <PasswordFormItem field={field} />}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => <ConfirmPasswordFormItem field={field} />}
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
