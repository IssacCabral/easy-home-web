import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  image: string;
}

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <img src={props.image} className="h-screen w-full object-center" />

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
