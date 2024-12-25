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
import { ContactRequestStatus } from "@/shared/contact-request";
import { UserRoundCheck } from "lucide-react";

interface RentPropertyConfirmProps {
  contactRequestStatus: ContactRequestStatus;
}

export function RentPropertyConfirm(props: RentPropertyConfirmProps) {
  const isEnabled = props.contactRequestStatus === ContactRequestStatus.IN_CONTACT;

  function handleRentPropertyConfirm() {
    console.log("Alugou");
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
          <UserRoundCheck size={14} />
          <span>Alugar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Alugar Imóvel</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Alugar esse imóvel para esse locatário, vai encerrar todos os outros pedidos de locação para esse mesmo
            imóvel. Tem certeza que deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleRentPropertyConfirm} disabled={!isEnabled}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
