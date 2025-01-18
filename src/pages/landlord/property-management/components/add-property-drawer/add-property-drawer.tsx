import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { addPropertyDrawerFormSchema, AddPropertyDrawerFormType, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function AddPropertyDrawer() {
  const form = useForm<AddPropertyDrawerFormType>({
    resolver: zodResolver(addPropertyDrawerFormSchema),
    defaultValues,
  });

  // Função de submissão
  function onSubmit(data: AddPropertyDrawerFormType) {
    console.log({ data });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Imóvel</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[40%]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-primary">Adição de Imóvel</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-landing">Título</FormLabel>
                  <FormControl>
                    <Input id="title" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
