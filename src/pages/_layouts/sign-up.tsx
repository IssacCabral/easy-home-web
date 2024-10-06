import { Outlet } from "react-router-dom";

interface SignUpLayoutProps {
  image: string;
}

export function SignUpLayout(props: SignUpLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex items-center justify-center">
        <Outlet />
      </div>

      <img src={props.image} className="h-screen w-full object-cover" />
    </div>
  );
}
