import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in/sign-in";
import { SignUp } from "./pages/auth/sign-up/sign-up";
import SignInImg from "@/assets/sign-in-image.jpg";
import SignUpImg from "@/assets/sign-up-image.jpg";
import { SignUpLayout } from "./pages/_layouts/sign-up";
import { AppLayout } from "./pages/_layouts/app";
import { LandingPage } from "./pages/app/landing-page/landing-page";
import { PropertyList } from "./pages/app/property-list/property-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/properties", element: <PropertyList /> },
    ],
  },
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
