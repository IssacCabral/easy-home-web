import LogoImg from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { UserMenu } from "./user-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const { userSession } = useContext(AuthContext);

  return (
    <div className="flex h-[5.5rem] items-center justify-between px-20">
      <Link to="/">
        <img src={LogoImg} />
      </Link>
      <div className="flex items-center gap-7">
        {userSession ? (
          <>
            {userSession.isLandlord ? (
              <Button
                className={cn(
                  "cursor-not-allowed border border-solid border-border bg-primary/70 font-semibold text-background opacity-50",
                )}
                disabled
              >
                Imóveis
              </Button>
            ) : (
              <Link to="/properties">
                <Button className="border border-solid border-border bg-primary font-semibold text-background">
                  Imóveis
                </Button>
              </Link>
            )}
            <UserMenu isOpaque={userSession.isLandlord} name={userSession.name} />
          </>
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
