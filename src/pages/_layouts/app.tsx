import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col antialiased">
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
}
