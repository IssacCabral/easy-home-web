import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { SignInHeader } from "./components/sign-in-header";
import { SignInFooter } from "./components/sign-in-footer";
import { EmailFormField } from "./components/form-fields/email";
import { signInForm, SignInForm, defaultValues } from "./schema";
import { PasswordFormField } from "./components/form-fields/password";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function SignIn() {
  const [searchParams] = useSearchParams();
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      ...defaultValues,
      email: searchParams.get("email") ?? "",
    },
  });

  function handleSignIn(data: SignInForm) {
    console.log("Data: ", data);
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="relative w-[360px] tracking-[-0.02em]">
        <SignInHeader />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSignIn)}
            className="mb-8 flex flex-col gap-5"
          >
            <EmailFormField form={form} />
            <PasswordFormField form={form} />
            <Button className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </Form>
        <SignInFooter />
      </div>
    </>
  );
}
