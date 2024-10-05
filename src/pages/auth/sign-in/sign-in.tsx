import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { SignInHeader } from "./sign-in-header";
import { SignInFooter } from "./sign-in-footer";

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
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-landing">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Insira seu email"
                    className="border-2 border-border text-foreground placeholder:text-muted"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    className="placeholder: border-2 border-border text-foreground placeholder:text-muted"
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
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
