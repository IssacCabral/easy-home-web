import { Link } from "react-router-dom";

export function SignUpFooter() {
  return (
    <footer className="text-center">
      <span className="text-muted">Já possui uma conta?</span>{" "}
      <Link to="/sign-in">
        <span className="font-semibold text-primary">Entrar</span>
      </Link>
    </footer>
  );
}
