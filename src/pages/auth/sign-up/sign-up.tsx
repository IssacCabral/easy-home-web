import { Button } from "@/components/ui/button";
import { SignUpHeader } from "./components/sign-up-header";
import { SignUpFooter } from "./components/sign-up-footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { NameFormField } from "./components/form-fields/name";
import { PhoneFormField } from "./components/form-fields/phone";
import { UserFormField } from "./components/form-fields/user";
import { EmailFormField } from "./components/form-fields/email";
import { PasswordFormField } from "./components/form-fields/password";
import { ConfirmPasswordFormItem } from "./components/form-fields/confirm-password";
import { SignUpForm, signUpForm, defaultValues } from "./schema";

export function SignUp() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
    defaultValues,
  });

  function handleSignUp(data: SignUpForm) {
    console.log("data in sign up:", data);
  }

  return (
    <div className="w-[360px] tracking-[-0.02em]">
      <SignUpHeader />
      <Form {...form}>
        <form
          className="mb-4 flex flex-col gap-2"
          onSubmit={form.handleSubmit(handleSignUp)}
        >
          <NameFormField form={form} />
          <PhoneFormField form={form} />
          <UserFormField form={form} />
          <EmailFormField form={form} />
          <PasswordFormField form={form} />
          <ConfirmPasswordFormItem form={form} />
          <Button className="w-full" type="submit">
            Criar conta
          </Button>
        </form>
      </Form>
      <SignUpFooter />
    </div>
  );
}
