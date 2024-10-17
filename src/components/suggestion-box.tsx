export interface SuggestionBoxProps {
  items: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export function SuggestionBox({
  items,
  onSuggestionClick,
}: SuggestionBoxProps) {
  return (
    <div className="absolute z-10 mt-2 max-w-72 rounded-md border border-gray-300 bg-white shadow-lg">
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
}
