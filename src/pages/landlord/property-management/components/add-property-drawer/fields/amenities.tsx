import { getAllAmenities } from "@/api/get-all-amenities";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useQuery } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";
import { AddPropertyDrawerFormType } from "../schema";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  form: UseFormReturn<AddPropertyDrawerFormType>;
  isOpen: boolean;
}

export function Amenities({ form, isOpen }: Props) {
  const { data: amenities, isLoading } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAllAmenities,
    enabled: isOpen,
  });

  return (
    <FormField
      control={form.control}
      name="amenities"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-landing">Comodidades</FormLabel>
            <FormDescription className="text-landing/70">
              Selecione as comodidades que esse imóvel irá dispor.
            </FormDescription>
          </div>
          {!isLoading && (
            <div className="flex flex-wrap items-center gap-4">
              {amenities!.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="amenities"
                  render={({ field }) => {
                    return (
                      <FormItem key={item.id}>
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(field.value?.filter((value) => value !== item.id));
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{item.label}</FormLabel>
                        </div>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
