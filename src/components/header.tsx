import LogoImg from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex h-[5.5rem] items-center justify-between px-20">
      <img src={LogoImg} />
      <div className="flex items-center gap-7">
        <Link
          to="/sign-in"
          className="text-sm font-semibold text-muted hover:underline"
        >
          Entrar
        </Link>
        <Link to="/">
          <Button className="border border-solid border-border bg-transparent font-semibold text-foreground hover:bg-primary hover:text-muted-foreground">
            Alugar Agora
          </Button>
        </Link>
      </div>
    </div>
  );
}
