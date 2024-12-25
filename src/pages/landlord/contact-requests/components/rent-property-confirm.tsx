import { rentProperty } from "@/api/rent-property";
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
import { clearCache } from "@/lib/react-query";
import { ContactRequestStatus } from "@/shared/contact-request";
import { UserRoundCheck } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface RentPropertyConfirmProps {
  status: ContactRequestStatus;
  id: string;
}

export function RentPropertyConfirm(props: RentPropertyConfirmProps) {
  const [_, setSearchParams] = useSearchParams();
  const isEnabled = props.status === ContactRequestStatus.IN_CONTACT;

  async function handleRentPropertyConfirm() {
    await rentProperty({ contactRequestId: props.id });
    setSearchParams((state) => {
      state.set("page", (1).toString());
      state.set("status", ContactRequestStatus.RENTED);

      return state;
    });
    clearCache();
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
