import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
  return (
    <div className="w-[360px] tracking-[-0.02em]">
      <header className="mb-8 flex flex-col items-center gap-3">
        <h1
          className="text-xl font-semibold text-primary"
          style={{ fontSize: "2.25rem", lineHeight: "2.75rem" }}
        >
          Log in
        </h1>
        <p className="text-landing">
          Bem-vindo de volta! Insira suas credenciais
        </p>
      </header>

      <form className="mb-8 flex flex-col gap-5">
        <div className="space-y-2">
          <Label className="text-landing" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Insira seu email"
            className="border-2 border-border text-foreground placeholder:text-muted"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-landing" htmlFor="password">
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            className="placeholder: border-2 border-border text-foreground placeholder:text-muted"
            placeholder="••••••••"
          />
        </div>

        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </form>

      <footer className="text-center">
        <span className="text-muted">Não tem uma conta?</span>{" "}
        <span className="font-semibold text-primary">Inscreva-se</span>
      </footer>
    </div>
  );
}
