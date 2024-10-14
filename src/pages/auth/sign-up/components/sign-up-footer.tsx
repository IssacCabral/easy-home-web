import { Link } from "react-router-dom";

interface SignUpFooterProps {
  isSubmitting: boolean;
}

export function SignUpFooter({ isSubmitting }: SignUpFooterProps) {
  return (
    <footer className="text-center">
      <span className="text-muted">Já possui uma conta?</span>{" "}
      <Link
        to="/sign-in"
        onClick={(event) => {
          if (isSubmitting) {
            event.preventDefault();
          }
        }}
        className={`font-semibold text-primary ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
      >
        Entrar
      </Link>
    </footer>
  );
}
