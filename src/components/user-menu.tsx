import { useNavigate } from "react-router-dom";
import { HousePlus, LogOut, SquareSplitHorizontal, UserRoundPen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";

interface UserMenuProps {
  name: string;
  isOpaque: boolean;
}

export function UserMenu(props: UserMenuProps) {
  const navigate = useNavigate();
  const { logout, userSession } = useContext(AuthContext);

  const handleNavigation = (value: string) => {
    if (props.isOpaque && (value === "properties-of-interest" || value === "rent-division")) {
      return;
    }

    if (!props.isOpaque && value === "dashboard") return;
    if (!props.isOpaque && !userSession?.property && value === "rent-division") return;

    switch (value) {
      case "profile":
        navigate("/");
        break;
      case "properties-of-interest":
        navigate("/properties-of-interest");
        break;
      case "rent-division":
        navigate("/rent-division");
        break;
      case "dashboard":
        navigate("/dashboard");
        break;
      case "logout":
        logout();
        navigate("/sign-in");
        break;
      default:
        break;
    }
  };

  const shouldDisableRentDivision = props.isOpaque || (!props.isOpaque && !userSession?.property);

  return (
    <Select onValueChange={handleNavigation}>
      <SelectTrigger className="flex w-48 items-center gap-1">
        <Avatar className="h-6 w-6">
          <AvatarImage src={"https://github.com/shadcn.png"} alt={props.name} />
          <AvatarFallback>{props.name[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold text-foreground">{props.name}</span>
      </SelectTrigger>
      <SelectContent className="z-50 p-1">
        <SelectItem value="profile" className="px-2">
          <div className="flex items-center gap-3">
            <UserRoundPen size={14} />
            <span>Conta</span>
          </div>
        </SelectItem>
        <SelectItem
          value="dashboard"
          className={cn("px-2", props.isOpaque ? null : "cursor-not-allowed text-muted opacity-50")}
        >
          <div className="flex items-center gap-3">
            <HousePlus size={14} />
            <span>Dashboard</span>
          </div>
        </SelectItem>
        <SelectItem
          value="properties-of-interest"
          className={cn("px-2", props.isOpaque ? "cursor-not-allowed text-muted opacity-50" : null)}
        >
          <div className="flex items-center gap-3">
            <HousePlus size={14} />
            <span>Imóveis Aplicados</span>
          </div>
        </SelectItem>
        <SelectItem
          value="rent-division"
          className={cn("px-2", shouldDisableRentDivision ? "cursor-not-allowed text-muted opacity-50" : null)}
        >
          <div className="flex items-center gap-3">
            <SquareSplitHorizontal size={14} />
            <span>Divisão de Aluguel</span>
          </div>
        </SelectItem>
        <SelectItem value="logout" className="px-2">
          <div className="flex items-center gap-3">
            <LogOut size={14} />
            <span>Sair</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
