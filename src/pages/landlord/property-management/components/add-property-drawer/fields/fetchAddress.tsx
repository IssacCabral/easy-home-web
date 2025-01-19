import { UseFormReturn } from "react-hook-form";
import { AddPropertyDrawerFormType } from "../schema";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SuggestionBox } from "@/components/suggestion-box";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { INITIAL_COORDS } from "@/utils/initial-coords";

interface Props {
  form: UseFormReturn<AddPropertyDrawerFormType>;
}

export function FetchAddress({ form }: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const suggestionBoxRef = useRef<HTMLDivElement>(null); // Ref para o SuggestionBox

  async function fetchData(input: string) {
    const encodedInput = encodeURIComponent(input);
    const autoCompleteSearchURL = `https://photon.komoot.io/api/?q=${encodedInput}&lat=${INITIAL_COORDS.lat}&lon=${INITIAL_COORDS.lon}&limit=5&layer=street`;

    const response = await axios.get(autoCompleteSearchURL);
    return response.data;
  }

  const debouncedFetch = debounce(async (input: string, setSuggestions: (data: any) => void) => {
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
  }, 300);

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
    <div className="flex gap-4">
      <FormField
        control={form.control}
        name="location"
        render={({ field, fieldState }) => (
          <FormItem className="w-full space-y-2">
            <FormLabel className="text-sm font-semibold text-landing">Endereço</FormLabel>
            <FormControl>
              <Input
                id="sei-nao"
                type="text"
                placeholder="Pesquise um endereço"
                className="text-foreground placeholder:text-muted"
                {...field}
                autoComplete="sei-nao"
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
      <FormField
        control={form.control}
        name="addressNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-landing">Número</FormLabel>
            <FormControl>
              <Input
                id="addressNumber"
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
  );
}
