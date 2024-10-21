import { Star } from "lucide-react";

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
        <span className="text-base font-semibold text-[#E26D5A]">
          Apartamento
        </span>
        {/* todo: transformar em um componente */}
        <span className="rounded-xl bg-[#D7F5E3] px-3 py-1 text-sm font-medium text-accent">
          Livre
        </span>
      </div>
    </div>
  );
}
