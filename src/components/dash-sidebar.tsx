import { BookUser, House, Sofa } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function DashSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="flex w-64 flex-col justify-between rounded-md bg-card px-5 py-10">
      <div>
        <Link to="/dashboard">
          <div
            className={`flex w-full items-center gap-2 rounded-lg py-2 pl-3 transition-all duration-300 ${
              isActive("/dashboard")
                ? "bg-primary text-background hover:bg-primary/90"
                : "text-foreground hover:bg-muted/20"
            }`}
          >
            <House size={20} />
            <span className={`text-sm font-semibold`}>Dashboard</span>
          </div>
        </Link>

        <Link to="/dashboard/property-management">
          <div
            className={`flex w-full items-center gap-2 rounded-lg py-2 pl-3 transition-all duration-300 ${
              isActive("/dashboard/property-management")
                ? "bg-primary text-background hover:bg-primary/90"
                : "text-foreground hover:bg-muted/20"
            }`}
          >
            <Sofa size={20} />
            <span className={`text-sm font-semibold`}>Gestão de Imóveis</span>
          </div>
        </Link>

        <Link to="/dashboard/contact-requests">
          <div
            className={`flex w-full items-center gap-2 rounded-lg py-2 pl-3 transition-all duration-300 ${
              isActive("/dashboard/contact-requests")
                ? "bg-primary text-background hover:bg-primary/90"
                : "text-foreground hover:bg-muted/20"
            }`}
          >
            <BookUser size={20} />
            <span className={`text-sm font-semibold`}>Pedidos de Contato</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
