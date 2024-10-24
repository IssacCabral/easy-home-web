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
import { PropertyDetails } from "./pages/app/property-details/property-details";
import { NotFound } from "./pages/not-found";
import { Dashboard } from "./pages/landlord/dashboard/dashboard";
import { PropertyManagement } from "./pages/landlord/property-management/property-management";
import { ContactRequests } from "./pages/landlord/contact-requests/contact-requests";
import { DashboardLayout } from "./pages/_layouts/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/properties", element: <PropertyList /> },
      { path: "/properties/:id", element: <PropertyDetails /> },
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "property-management",
        element: <PropertyManagement />,
      },
      { path: "contact-requests", element: <ContactRequests /> },
    ],
  },
]);
