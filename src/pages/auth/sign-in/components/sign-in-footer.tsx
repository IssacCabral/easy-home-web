import { Link } from "react-router-dom";

export function SignInFooter() {
  return (
    <footer className="text-center">
      <span className="text-muted">Não tem uma conta?</span>{" "}
      <Link to="/sign-up">
        <span className="font-semibold text-primary">Inscreva-se</span>
      </Link>
    </footer>
  );
}
