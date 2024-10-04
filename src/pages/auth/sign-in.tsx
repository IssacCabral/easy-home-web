import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
  return (
    <div className="w-[360px] border border-solid border-green-500">
      <header className="mb-8 flex flex-col items-center gap-3">
        <h1>Log in</h1>
        <p>Bem-vindo de volta! Insira suas credenciais</p>
      </header>

      <form>
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" />
        </div>

        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
