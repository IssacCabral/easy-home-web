import { useForm } from "react-hook-form";
import {
  defaultValues,
  findPropertiesForm,
  FindPropertiesForm,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function PropertyList() {
  const form = useForm<FindPropertiesForm>({
    resolver: zodResolver(findPropertiesForm),
    defaultValues,
  });

  function handleFindProperties(data: FindPropertiesForm) {
    console.log("Data: ", data);
  }

  return (
    <div className="flex">
      {/* Coluna dos filtros */}
      <div className="w-1/3 max-w-[350px] rounded-xl bg-card pl-14 pr-2 pt-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFindProperties)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="location"
              render={({ field, fieldState }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-semibold text-landing">
                    Localização
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Pesquisar"
                      className="border-2 border-border text-foreground placeholder:text-muted"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="radiusInMeters"
              render={({ field, fieldState }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-semibold text-landing">
                    Raio De Pesquisa (em metros)
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="radiusInMeters"
                      type="text"
                      className="w-1/4 border-2 border-border text-foreground placeholder:text-muted"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxPrice"
              render={({ field: { value, onChange } }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-semibold text-landing">
                    <span>Mensalidade / Aluguel</span>
                  </FormLabel>
                  <FormControl>
                    <>
                      <Slider
                        min={100}
                        max={1000}
                        step={50}
                        defaultValue={[value]}
                        onValueChange={onChange}
                      />
                      <span className="text-sm font-semibold text-landing">
                        R$ {value}
                      </span>
                    </>
                  </FormControl>
                </FormItem>
              )}
            />

            <span className="mt-5 font-bold">Número de quartos</span>

            <div className="grid grid-cols-2 items-center gap-4">
              <FormField
                control={form.control}
                name="minBedrooms"
                render={({ field, fieldState }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-semibold text-landing">
                      Mínimo
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="minBedrooms"
                        type="number"
                        placeholder="Min."
                        className="border-2 border-border text-foreground placeholder:text-muted"
                        min={1}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxBedrooms"
                render={({ field, fieldState }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-semibold text-landing">
                      Máximo
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="maxBedrooms"
                        type="number"
                        placeholder="Max."
                        className="border-2 border-border text-foreground placeholder:text-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-1/3" type="submit">
              Pesquisar
            </Button>
          </form>
        </Form>
      </div>

      {/* Mapa e listagem das casas */}
      <div className="w-full border border-solid border-green-400">
        <h1>Eae</h1>
      </div>
    </div>
  );
}
