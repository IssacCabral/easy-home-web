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
import { Button } from "@/components/ui/button";
import { UseRentDivision } from "../../use-rent-division";

export function OpenDivisionDialog() {
  const { confirmOpenRentDivision } = UseRentDivision();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mt-3 w-32">Abrir divisão</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Abrir Divisão de Aluguel</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Ao abrir para divisão, o status do imóvel indicará para outros inquilinos que você deseja receber
            solicitações de divisão de aluguel. <br /> <br /> Deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={confirmOpenRentDivision}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
