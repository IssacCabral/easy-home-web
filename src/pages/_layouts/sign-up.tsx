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

      <div className="h-screen w-full">
        <img src={props.image} alt="" className="h-full w-full" />
      </div>
    </div>
  );
}
