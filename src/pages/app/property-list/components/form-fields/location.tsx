import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { INITIAL_COORDS } from "@/utils/initial-coords";
import axios from "axios";
import { UseFormReturn } from "react-hook-form";
import { debounce } from "lodash";
import { useState } from "react";

interface LocationFormFieldProps {
  form: UseFormReturn<
    {
      location: string;
      radiusInMeters: number;
      maxPrice: number;
      minBedrooms: number;
      maxBedrooms: number;
      propertyStatus: "FREE" | "BUSY" | "SPLIT";
      propertyTypes: "HOUSE" | "DUPLEX" | "APARTMENT";
      amenities: string[];
    },
    any,
    undefined
  >;
}

export function LocationFormField({ form }: LocationFormFieldProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  async function fetchData(input: string) {
    const encodedInput = encodeURIComponent(input);
    const autoCompleteSearchURL = `https://photon.komoot.io/api/?q=${encodedInput}&lat=${INITIAL_COORDS.lat}&lon=${INITIAL_COORDS.lon}&limit=5&layer=street`;

    const response = await axios.get(autoCompleteSearchURL);
    return response.data;
  }

  const debouncedFetch = debounce(
    async (input: string, setSuggestions: (data: any) => void) => {
      try {
        const data = await fetchData(input);
        setSuggestions(
          data.features.map(({ properties }: any) => {
            return `${properties.name}, ${properties.district || ""}`;
          }),
        );
      } catch (error) {
        console.error("Erro ao buscar localizações:", error);
      }
    },
    300,
  );

  async function handleTypeLocation(input: string) {
    if (input !== "") {
      debouncedFetch(input, setSuggestions);
    }
  }

  function handleSuggestionClick(suggestion: string) {
    form.setValue("location", suggestion);
    setSuggestions([]);
  }

  return (
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
              onChange={(e) => {
                field.onChange(e);
                handleTypeLocation(e.target.value);
              }}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
          {suggestions.length > 0 && (
            <div className="absolute z-10 mt-2 max-w-72 rounded-md border border-gray-300 bg-white shadow-lg">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="cursor-pointer p-2 text-sm hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </FormItem>
      )}
    />
  );
}
