import { finishShareRequest } from "@/api/finish-share-request";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquareOff } from "lucide-react";
import { useState } from "react";

interface FinishShareRequestConfirmProps {
  id: string;
}

export function FinishShareRequestConfirm(props: FinishShareRequestConfirmProps) {
  const [reason, setReason] = useState<string>("");
  const isEnabled = true;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setReason(event.target.value);
  }

  async function handleFinishShareRequestConfirm() {
    await finishShareRequest({
      id: props.id,
      reason,
    });

    setReason("");
    window.location.reload();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={`flex items-center gap-2 rounded border border-transparent p-2 text-xs text-background transition ${
            isEnabled
              ? "bg-rose-500 hover:border-rose-500 hover:bg-rose-500/80 focus:outline-none focus:ring-2 focus:ring-rose-500"
              : "cursor-not-allowed bg-rose-500/30"
          }`}
          disabled={!isEnabled}
        >
          <MessageSquareOff size={12} />
          <span>Finalizar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Finalizar Contato</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            <Textarea
              className="placeholder:text-landing/70"
              placeholder="Informe ao locatário, o motivo do encerramento do contato."
              value={reason}
              onChange={handleChange}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setReason("")}>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={reason.trim() === ""} onClick={handleFinishShareRequestConfirm}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
