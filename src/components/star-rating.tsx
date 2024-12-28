import { Star } from "lucide-react";

export function StarRating({ rating, setRating }: { rating: number; setRating: (value: number) => void }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={20}
          color={index < rating ? "#FCDE40" : "#E5E7EB"}
          fill={index < rating ? "#FCDE40" : "none"}
          onClick={() => setRating(index + 1)}
          className="cursor-pointer transition hover:scale-110"
        />
      ))}
    </div>
  );
}
