import { StarRating } from "@/components/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquarePlus } from "lucide-react";
import { useState } from "react";

export function FeedbackForm() {
  const [newCommentText, setNewCommentText] = useState<string>("");
  const [userRating, setUserRating] = useState(0);

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <form className="flex items-start gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={"https://github.com/shadcn.png"} />
        <AvatarFallback>{"Teste"}</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-2">
        <Textarea
          value={newCommentText}
          onChange={(event) => setNewCommentText(event.target.value)}
          required
          placeholder="Deixe uma avaliação"
          className="placeholder:text-landing/60"
        />
        <footer
          className={`transition-all ${
            newCommentText || userRating ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          } flex flex-col gap-2 overflow-hidden`}
        >
          <StarRating rating={userRating} setRating={setUserRating} />
          <button
            disabled={isNewCommentEmpty || userRating === 0}
            className="flex w-20 items-center gap-2 rounded border border-transparent bg-cyan-600 p-2 text-xs text-background transition hover:border-cyan-600 hover:bg-cyan-600/80 focus:outline-none focus:ring-2 focus:ring-cyan-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <MessageSquarePlus size={14} />
            <span>Publicar</span>
          </button>
        </footer>
      </div>
    </form>
  );
}
