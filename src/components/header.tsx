import LogoImg from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { UserMenu } from "./user-menu";

export function Header() {
  const { userSession } = useContext(AuthContext);

  return (
    <div className="flex h-[5.5rem] items-center justify-between px-20">
      <Link to="/">
        <img src={LogoImg} />
      </Link>
      <div className="flex items-center gap-7">
        {userSession ? (
          <UserMenu name={userSession.name} />
        ) : (
          <>
            <Link to="/sign-in" className="text-sm font-semibold text-muted hover:underline">
              Entrar
            </Link>
            <Link to="/properties">
              <Button className="border border-solid border-border bg-transparent font-semibold text-foreground hover:bg-primary hover:text-muted-foreground">
                Alugar Agora
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
