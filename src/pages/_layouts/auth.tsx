import { Outlet } from "react-router-dom";
import SignInImg from "@/assets/sign-in-image.jpg";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="relative h-screen w-full">
        <img src={SignInImg} alt="" className="h-full w-full" />
      </div>

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
