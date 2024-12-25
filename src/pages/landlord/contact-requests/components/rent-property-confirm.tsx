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

export function RentPropertyConfirm() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-2 rounded border border-transparent bg-cyan-600 p-2 text-xs text-background transition hover:border-cyan-600 hover:bg-cyan-600/80 focus:outline-none focus:ring-2 focus:ring-cyan-600">
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
          <AlertDialogAction onClick={() => console.log("Alugou")}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
