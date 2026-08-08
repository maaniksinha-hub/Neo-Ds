import './mAutoSuggestion.css';

export interface MAutoSuggestionProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  className?: string;
}

/**
 * USE: auto-suggestion, keyboard-suggestions, predictive-text
 * WHEN: Suggestion strip above the keyboard showing predicted words or stock names during text entry.
 * PLATFORM: Mobile
 */
export function MAutoSuggestion({ suggestions, onSelect, className }: MAutoSuggestionProps) {
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
