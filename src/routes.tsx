import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import SignInImg from "@/assets/sign-in-image.jpg";
import SignUpImg from "@/assets/sign-up-image.jpg";
import { SignUpLayout } from "./pages/_layouts/sign-up";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <AuthLayout image={SignInImg} />,
    children: [{ path: "/sign-in", element: <SignIn /> }],
  },

  {
    path: "/sign-up",
    element: <SignUpLayout image={SignUpImg} />,
    children: [{ path: "/sign-up", element: <SignUp /> }],
  },
]);