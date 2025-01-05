import { selectShareRequest } from "@/api/select-share-request";
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
import { ShareRequestStatus } from "@/shared/share-request";
import { UserRoundCheck } from "lucide-react";

interface SelectShareRequestConfirmProps {
  id: string;
  status: ShareRequestStatus;
}

export function SelectShareRequestConfirm(props: SelectShareRequestConfirmProps) {
  const isEnabled = props.status === ShareRequestStatus.IN_CONTACT;

  async function handleSelectShareRequestConfirm() {
    await selectShareRequest(props.id);
    window.location.reload();
  }

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
          <UserRoundCheck size={12} />
          <span>Selecionar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Selecionar Morador</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Após continuar, esse usuário ficará elegivel para dividir aluguel com você. Tem certeza que deseja
            continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={!isEnabled} onClick={handleSelectShareRequestConfirm}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
