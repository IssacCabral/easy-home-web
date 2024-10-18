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
import { useState, useRef } from "react";
import { SuggestionBox } from "@/components/suggestion-box";

interface LocationFormFieldProps {
  form: UseFormReturn<
    {
      location: string;
      radiusInMeters: number;
      maxPrice: number;
      minBedrooms: number;
      maxBedrooms: number;
      propertyStatus?: "FREE" | "BUSY" | "SPLIT";
      propertyTypes: "HOUSE" | "DUPLEX" | "APARTMENT";
      amenities?: string[];
    },
    any,
    undefined
  >;
}

export function LocationFormField({ form }: LocationFormFieldProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const suggestionBoxRef = useRef<HTMLDivElement>(null); // Ref para o SuggestionBox

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
    setSuggestions([]); // Esvaziar as sugestões ao selecionar uma
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
              autoComplete="off"
              onChange={(e) => {
                field.onChange(e);
                handleTypeLocation(e.target.value);
              }}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
          {suggestions.length > 0 && (
            <SuggestionBox
              ref={suggestionBoxRef}
              items={suggestions}
              onSuggestionClick={handleSuggestionClick}
              onClose={() => setSuggestions([])}
            />
          )}
        </FormItem>
      )}
    />
  );
}
