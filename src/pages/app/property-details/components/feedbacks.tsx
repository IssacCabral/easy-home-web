import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function Feedback() {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const props = {
      color: "#FCDE40",
      size: 16,
      ...(index < 3 && { fill: "#FCDE40" }),
    };

    return <Star key={index} {...props} />;
  });

  return (
    <div>
      <div className="border-red flex items-start gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={"https://github.com/shadcn.png"} />
          <AvatarFallback>{"Teste"}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-sm">Inquilino Maluquinho</p>
            <div className="flex">{stars}</div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quisquam consequatur neque autem adipisci
            inventore sed, dolorem rem atque, dolorum ratione. Pariatur a animi quasi? Consequatur et labore nemo odio.
          </p>
        </div>
      </div>
    </div>
  );
}
