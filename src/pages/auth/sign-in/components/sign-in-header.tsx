import LogoImg from "@/assets/logo.png";
import { Link } from "react-router-dom";

export function SignInHeader() {
  return (
    <>
      <Link to="/">
        <img
          src={LogoImg}
          className="absolute left-1/2 top-0 -mt-36 -translate-x-1/2 transform"
        />
      </Link>

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
    </>
  );
}
