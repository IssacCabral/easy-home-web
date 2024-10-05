import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  image: string;
}

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="h-screen w-full">
        <img src={props.image} alt="" className="h-full w-full" />
      </div>

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
