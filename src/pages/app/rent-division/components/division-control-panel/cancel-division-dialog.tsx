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
import { UseRentDivision } from "../../use-rent-division";
import { Button } from "@/components/ui/button";

export function CancelDivisionDialog() {
  const { confirmCancelRentDivision } = UseRentDivision();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mt-3 w-32 bg-type hover:bg-type/90">Cancelar divisão</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancelar Divisão de Aluguel</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Ao cancelar a divisão de aluguel, você ignora todas as solicitações recebidas e o status do imóvel volta
            para "ocupado". <br /> <br /> Deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={confirmCancelRentDivision}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
