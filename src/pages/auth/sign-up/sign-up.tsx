import { Button } from "@/components/ui/button";
import { SignUpHeader } from "./components/sign-up-header";
import { SignUpFooter } from "./components/sign-up-footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { NameFormItem } from "./components/form-items/name-form-item";
import { PhoneFormItem } from "./components/form-items/phone-form-item";
import { UserFormItem } from "./components/form-items/user-form-item";
import { EmailFormItem } from "./components/form-items/email-form-item";
import { PasswordFormItem } from "./components/form-items/password-form-item";
import { ConfirmPasswordFormItem } from "./components/form-items/confirm-password-form-item";
import { SignUpForm, signUpForm } from "./schema";

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
