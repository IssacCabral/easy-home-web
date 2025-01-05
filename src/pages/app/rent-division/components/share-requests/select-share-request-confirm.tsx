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
import { UserRoundCheck } from "lucide-react";

export function SelectShareRequestConfirm() {
  const isEnabled = true;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={`flex items-center gap-2 rounded border border-transparent p-2 text-xs text-background transition focus:outline-none focus:ring-2 ${
            isEnabled
              ? "bg-cyan-600 hover:border-cyan-600 hover:bg-cyan-600/80 focus:ring-cyan-600"
              : "cursor-not-allowed bg-cyan-600/30"
          }`}
          disabled={!isEnabled}
        >
          <UserRoundCheck size={14} />
          <span>Selecionar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Selecionar Morador</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Após continuar, esse usuário dividirá aluguel com você. Tem certeza que deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={!isEnabled}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
