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

export function CompleteDivisionDialog() {
  const { confirmCompleteRentDivision } = UseRentDivision();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mt-3 w-32">Concluir divisão</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Concluir Divisão de Aluguel</AlertDialogTitle>
          <AlertDialogDescription className="text-landing">
            Ao concluir, todos que você selecionou irão morar com você e o status do imóvel volta para "ocupado". <br />{" "}
            <br /> Deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={confirmCompleteRentDivision}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
