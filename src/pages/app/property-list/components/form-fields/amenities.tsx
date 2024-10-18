import { getAllAmenities } from "@/api/get-all-amenities";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { FetchingAmenitiesContext } from "@/contexts/fetching-amenities-context";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { SearchFormValues } from "../../schema";

interface AmenitiesFormFieldProps {
  form: SearchFormValues;
}

export function AmenitiesFormField({ form }: AmenitiesFormFieldProps) {
  const { data: result, isFetching } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAllAmenities,
  });

  const { setIsFetching } = useContext(FetchingAmenitiesContext);

  useEffect(() => {
    setIsFetching(isFetching);
  }, [isFetching]);

  return (
    <FormField
      control={form.control}
      name="amenities"
      render={({ fieldState }) => (
        <FormItem className="mb-4 space-y-3">
          <FormLabel className="text-sm font-semibold text-landing">
            Comodidades (Selecione uma ou mais)
          </FormLabel>
          {isFetching ? (
            <Spinner />
          ) : (
            result!.map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="amenities"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.label) ?? false}
                          onCheckedChange={(checked) => {
                            const currentValue = field.value ?? [];
                            return checked
                              ? field.onChange([...currentValue, item.label])
                              : field.onChange(
                                  currentValue.filter(
                                    (value) => value !== item.label,
                                  ),
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel>{item.label}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))
          )}
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
