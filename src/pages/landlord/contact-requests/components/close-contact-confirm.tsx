import { closeContactRequest } from "@/api/close-contact-request";
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
import { clearCache } from "@/lib/react-query";
import { ContactRequestStatus } from "@/shared/contact-request";
import { MessageSquareOff } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface CloseContactConfirmProps {
  status: ContactRequestStatus;
  id: string;
}

export function CloseContactConfirm(props: CloseContactConfirmProps) {
  const [_, setSearchParams] = useSearchParams();
  const isEnabled = props.status === ContactRequestStatus.IN_CONTACT;

  const [reason, setReason] = useState<string>("");

  async function handleCloseContactConfirm() {
    await closeContactRequest({
      id: props.id,
      reason,
    });
    setSearchParams((state) => {
      state.set("page", (1).toString());
      state.set("status", ContactRequestStatus.FINISHED);

      return state;
    });
    setReason("");
    clearCache();
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setReason(event.target.value);
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
          <MessageSquareOff size={14} />
          <span>Encerrar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Encerrar Contato</AlertDialogTitle>
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
          <AlertDialogAction onClick={handleCloseContactConfirm} disabled={reason.trim() === ""}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
