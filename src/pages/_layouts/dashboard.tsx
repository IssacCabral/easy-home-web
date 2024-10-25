import { DashSidebar } from "@/components/dash-sidebar";
import { Header } from "@/components/header";

import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <Header />
      <div
        className="m-auto flex max-w-[1528px] justify-start"
        style={{ minHeight: "calc(100vh - 5.5rem)" }}
      >
        <DashSidebar />
        <Outlet />
      </div>
    </div>
  );
}
