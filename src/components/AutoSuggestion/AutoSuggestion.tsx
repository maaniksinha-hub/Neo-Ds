import './AutoSuggestion.css';

export interface AutoSuggestionProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  className?: string;
}

export function AutoSuggestion({ suggestions, onSelect, className }: AutoSuggestionProps) {
  return (
    <div className={['ds-autosuggestion', className].filter(Boolean).join(' ')}>
      {suggestions.map((suggestion) => (
        <button key={suggestion} type="button" className="ds-autosuggestion__item" onClick={() => onSelect(suggestion)}>
          {suggestion}
        </button>
      ))}
    </div>
  );
}
