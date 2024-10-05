import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="w-[360px] tracking-[-0.02em]">
      <header className="mb-5 flex flex-col items-center gap-3">
        <h1
          className="text-xl font-semibold text-primary"
          style={{ fontSize: "2rem", lineHeight: "2.75rem" }}
        >
          Criar conta grátis
        </h1>
        <p className="text-landing">
          Disponibilize imóveis ou encontre sua moradia
        </p>
      </header>
      <form className="mb-6 flex flex-col gap-2">
        <div className="space-y-1">
          <Label className="text-landing" htmlFor="name">
            Nome
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            className="border-2 border-border text-foreground placeholder:text-muted"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-landing" htmlFor="phone">
            Número para contato
          </Label>
          <Input
            id="phone"
            type="tel"
            className="border-2 border-border text-foreground placeholder:text-muted"
            placeholder="Digite seu telefone"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-landing" htmlFor="user-type">
            Tipo de usuário
          </Label>
          <Select>
            <SelectTrigger className="w-[360px] border-2 border-border text-foreground placeholder:text-muted">
              <SelectValue placeholder="Você está..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="focus:bg-popover-foreground"
                value="tenant"
              >
                Buscando imóveis para alugar
              </SelectItem>
              <SelectItem
                className="focus:bg-popover-foreground"
                value="landlord"
              >
                Disponibilizando imóveis para aluguel
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
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
        <div className="space-y-1">
          <Label className="text-landing" htmlFor="password">
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            className="border-2 border-border text-foreground placeholder:text-muted"
            placeholder="Crie uma senha"
          />
        </div>
        <div className="mb-2 space-y-1">
          <Label className="text-landing" htmlFor="password">
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            className="border-2 border-border text-foreground placeholder:text-muted"
            placeholder="Repita a senha"
          />
        </div>
        <Button className="w-full" type="submit">
          Criar conta
        </Button>
      </form>
      <footer className="text-center">
        <span className="text-muted">Já possui uma conta?</span>{" "}
        <Link to="/sign-in">
          <span className="font-semibold text-primary">Entrar</span>
        </Link>
      </footer>
    </div>
  );
}
