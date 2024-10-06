import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { SignInHeader } from "./components/sign-in-header";
import { SignInFooter } from "./components/sign-in-footer";
import { EmailFormItem } from "./components/form-items/email-form-item";
import { PasswordFormItem } from "./components/form-items/password-form.item";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSignIn(data: SignInForm) {
    console.log("Data: ", data);
  }

  return (
    <div className="relative w-[360px] tracking-[-0.02em]">
      <SignInHeader />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignIn)}
          className="mb-8 flex flex-col gap-5"
        >
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
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
      </Form>
      <SignInFooter />
    </div>
  );
}
