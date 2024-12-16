import { Link } from "react-router-dom";

interface SignInFooterProps {
  isSubmitting: boolean;
}

export function SignInFooter({ isSubmitting }: SignInFooterProps) {
  return (
    <footer className="text-center">
      <span className="text-muted">Não tem uma conta?</span>{" "}
      <Link
        to="/sign-up"
        onClick={(event) => {
          if (isSubmitting) {
            event.preventDefault();
          }
        }}
        className={`font-semibold text-primary ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
      >
        Inscreva-se
      </Link>
    </footer>
  );
}
