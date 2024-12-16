import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { SignInHeader } from "./components/sign-in-header";
import { SignInFooter } from "./components/sign-in-footer";
import { EmailFormField } from "./components/form-fields/email";
import { signInForm, SignInForm, defaultValues } from "./schema";
import { PasswordFormField } from "./components/form-fields/password";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { toast } from "@/hooks/use-toast";

export function SignIn() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      ...defaultValues,
      email: searchParams.get("email") ?? "",
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  const { login } = useContext(AuthContext);

  const { mutateAsync: signInFn } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      const result = await signInFn({
        email: data.email,
        password: data.password,
      });
      login(result.accessToken);
      navigate(`/properties`);
    } catch (err) {
      console.log("err:", err);
      toast({
        variant: "destructive",
        description: "Credenciais Inválidas",
      });
    }
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="relative w-[360px] tracking-[-0.02em]">
        <SignInHeader />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignIn)} className="mb-8 flex flex-col gap-5">
            <EmailFormField form={form} />
            <PasswordFormField form={form} />
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Entrar
            </Button>
          </form>
        </Form>
        <SignInFooter isSubmitting={isSubmitting} />
      </div>
    </>
  );
}
