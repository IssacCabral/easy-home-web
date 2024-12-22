import { HousePlus, LogOut, SquareSplitHorizontal, UserRoundPen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

interface UserMenuProps {
  name: string;
}

export function UserMenu(props: UserMenuProps) {
  return (
    <Select>
      <SelectTrigger className="flex w-48 items-center gap-1">
        <Avatar className="h-6 w-6">
          <AvatarImage src={"https://github.com/shadcn.png"} alt={props.name} />
          <AvatarFallback>{props.name[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold text-foreground">{props.name}</span>
      </SelectTrigger>
      <SelectContent className="p-1">
        <SelectItem value="profile" className="px-2">
          <div className="flex items-center gap-3">
            <UserRoundPen size={14} />
            <span>Conta</span>
          </div>
        </SelectItem>
        <SelectItem value="settings" className="px-2">
          <div className="flex items-center gap-3">
            <HousePlus size={14} />
            <span>Imóveis Aplicados</span>
          </div>
        </SelectItem>
        <SelectItem value="rent-split" className="px-2">
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
