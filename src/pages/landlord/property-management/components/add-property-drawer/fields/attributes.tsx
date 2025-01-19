import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  form: any;
}

export function Attributes({ form }: Props) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex gap-4">
        <FormField
          control={form.control}
          name="width"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-landing">Largura</FormLabel>
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
              <FormLabel className="text-landing">Profundidade</FormLabel>
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
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-landing">Preço (em R$)</FormLabel>
              <FormControl>
                <Input
                  id="price"
                  type="number"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  placeholder="Ex.: 1500"
                  className="placeholder:text-landing/70"
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
          name="type"
          render={({ field }) => (
            <FormItem className="w-full">
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
        <FormField
          control={form.control}
          name="bedroomsAmount"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-landing">Quartos</FormLabel>
              <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value?.toString()}>
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
            <FormItem className="w-full">
              <FormLabel className="text-landing">Banheiros</FormLabel>
              <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value?.toString()}>
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
    </div>
  );
}
