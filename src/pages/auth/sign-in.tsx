import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import LogoImg from "@/assets/logo.png";

export function SignIn() {
  return (
    <div className="relative w-[360px] tracking-[-0.02em]">
      <img
        src={LogoImg}
        className="absolute left-1/2 top-0 -mt-36 -translate-x-1/2 transform"
      />

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
        <Link to="/sign-up">
          <span className="font-semibold text-primary">Inscreva-se</span>
        </Link>
      </footer>
    </div>
  );
}
