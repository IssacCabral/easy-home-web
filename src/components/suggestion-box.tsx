import { forwardRef, useEffect } from "react";

export interface SuggestionBoxProps {
  items: string[];
  onSuggestionClick: (suggestion: string) => void;
  onClose: () => void;
}

export const SuggestionBox = forwardRef<HTMLDivElement, SuggestionBoxProps>(
  ({ items, onSuggestionClick, onClose }, ref) => {
    useEffect(() => {
      // Fechar ao pressionar "Esc"
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      // Limpar os event listeners quando o componente desmontar
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [ref, onClose]);

    return (
      <div ref={ref} className="absolute z-10 mt-2 max-w-72 rounded-md border border-gray-300 bg-white shadow-lg">
        {items.map((suggestion, index) => (
          <div
            key={index}
            className="cursor-pointer p-2 text-sm hover:bg-gray-200"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    );
  },
);
