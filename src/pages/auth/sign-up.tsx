import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <footer className="text-center">
        <span className="text-muted">Já possui uma conta?</span>{" "}
        <Link to="/sign-in">
          <span className="font-semibold text-primary">Entrar</span>
        </Link>
      </footer>
    </div>
  );
}
