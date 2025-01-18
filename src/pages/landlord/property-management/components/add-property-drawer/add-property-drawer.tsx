import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { addPropertyDrawerFormSchema, AddPropertyDrawerFormType, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
}

export function AddPropertyDrawer({ isOpen }: Props) {
  const form = useForm<AddPropertyDrawerFormType>({
    resolver: zodResolver(addPropertyDrawerFormSchema),
    defaultValues,
  });

  function onSubmit(data: AddPropertyDrawerFormType) {
    console.log({ data });
  }

  // evita a barra de rolagem e compensa com padding, quando abre o drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Evita a rolagem.
      document.body.style.paddingRight = "15px"; // Compensa a barra de rolagem.
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-3xl font-semibold text-primary">Adição de Imóvel</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-landing">Título</FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    type="text"
                    className="placeholder:text-landing/70"
                    placeholder="Insira o título do imóvel..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-landing">Tipo de Imóvel</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo de imóvel" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="hover:bg-primary hover:text-card" value="HOUSE">
                      Casa
                    </SelectItem>
                    <SelectItem className="hover:bg-primary hover:text-card" value="APARTMENT">
                      Apartamento
                    </SelectItem>
                    <SelectItem className="hover:bg-primary hover:text-card" value="DUPLEX">
                      Duplex
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-landing">Largura (em metros)</FormLabel>
                  <FormControl>
                    <Input
                      id="width"
                      type="number"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="depth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-landing">Profundidade (em metros)</FormLabel>
                  <FormControl>
                    <Input
                      id="depth"
                      type="number"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="bedroomsAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-landing">Quantidade de Quartos</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a quantidade de quartos" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                        <SelectItem key={value} value={value.toString()} className="hover:bg-primary hover:text-card">
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathroomsAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-landing">Quantidade de Banheiros</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a quantidade de banheiros" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                        <SelectItem key={value} value={value.toString()} className="hover:bg-primary hover:text-card">
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-landing">Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    className="placeholder:text-landing/70"
                    placeholder="Insira uma descrição para o imóvel..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Adicionar</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}
