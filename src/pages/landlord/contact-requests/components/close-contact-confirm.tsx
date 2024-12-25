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
import { ContactRequestStatus } from "@/shared/contact-request";
import { MessageSquareOff } from "lucide-react";
import { useState } from "react";

interface CloseContactConfirmProps {
  contactRequestStatus: ContactRequestStatus;
}

export function CloseContactConfirm(props: CloseContactConfirmProps) {
  const isEnabled = props.contactRequestStatus === ContactRequestStatus.IN_CONTACT;

  const [reason, setReason] = useState<string>("");

  function handleCloseContactConfirm() {
    console.log("Encerrou! Motivo:", reason);
    setReason("");
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
            <div className="grid w-full gap-1.5">
              <Textarea
                className="placeholder:text-landing/70"
                placeholder="Informe ao locatário, o motivo do encerramento do contato."
                value={reason}
                onChange={handleChange}
              />
            </div>
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
