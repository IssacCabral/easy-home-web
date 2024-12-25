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
import { MessageSquareOff } from "lucide-react";

export function CloseContactConfirm() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-2 rounded border border-transparent bg-rose-500 p-2 text-xs text-background transition hover:border-rose-500 hover:bg-rose-500/80 focus:outline-none focus:ring-2 focus:ring-rose-500">
          <MessageSquareOff size={14} />
          <span>Encerrar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Encerrar Contato</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Tem certeza que deseja encerrar contato com esse locatário?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => console.log("Encerrou")}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
