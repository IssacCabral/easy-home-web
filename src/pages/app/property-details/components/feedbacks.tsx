import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface FeedbackProps {
  tenantName: string;
  rating: number;
  comment: string;
}

export function Feedback(props: FeedbackProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starProps = {
      color: "#FCDE40",
      size: 16,
      ...(index < props.rating && { fill: "#FCDE40" }),
    };

    return <Star key={index} {...starProps} />;
  });

  return (
    <div className="border-red mb-3 flex items-start gap-2">
      <Avatar className="h-6 w-6">
        <AvatarImage src={"https://github.com/shadcn.png"} />
        <AvatarFallback>{"Teste"}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm">{props.tenantName}</p>
          <div className="flex">{stars}</div>
        </div>
        <p className="text-sm">{props.comment}</p>
      </div>
    </div>
  );
}
