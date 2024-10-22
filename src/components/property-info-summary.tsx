import { Star } from "lucide-react";
import { Badge } from "./badge";

export function PropertyInfoSummary() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Star color="#FCDE40" size={16} fill="#FCDE40" />
        <Star color="#FCDE40" size={16} fill="#FCDE40" />
        <Star color="#FCDE40" size={16} fill="#FCDE40" />
        <Star color="#FCDE40" size={16} />
        <Star color="#FCDE40" size={16} />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-type text-base font-semibold">Apartamento</span>
        <Badge badge="Livre" variant="available" />
      </div>
    </div>
  );
}
