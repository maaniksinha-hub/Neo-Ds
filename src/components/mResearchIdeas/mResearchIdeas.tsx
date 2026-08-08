import { GBadge } from '../gBadge/gBadge';
import './mResearchIdeas.css';

export type ResearchIdeaCall = 'buy' | 'sell';
export type ResearchIdeaConfidence = 'low' | 'medium' | 'high';

export interface MResearchIdeasProps {
  scripName: string;
  call: ResearchIdeaCall;
  targetPrice?: string;
  currentPrice?: string;
  timeframe?: string;
  analystName?: string;
  confidence?: ResearchIdeaConfidence;
  className?: string;
}

const CONFIDENCE_LABEL: Record<ResearchIdeaConfidence, string> = {
  low: 'Low confidence',
  medium: 'Medium confidence',
  high: 'High confidence',
};

export function MResearchIdeas({
  scripName,
  call,
  targetPrice,
  currentPrice,
  timeframe,
  analystName,
  confidence,
  className,
}: MResearchIdeasProps) {
  return (
    <div className={['ds-researchidea', className].filter(Boolean).join(' ')}>
      <div className="ds-researchidea__header">
        <span className="ds-researchidea__name">{scripName}</span>
        <GBadge color={call === 'buy' ? 'positive' : 'negative'}>{call === 'buy' ? 'Buy' : 'Sell'}</GBadge>
      </div>
      {(targetPrice || currentPrice) && (
        <div className="ds-researchidea__prices">
          {currentPrice && (
            <span className="ds-researchidea__pricegroup">
              <span className="ds-researchidea__pricelabel">CMP</span>
              <span className="ds-researchidea__pricevalue">{currentPrice}</span>
            </span>
          )}
          {targetPrice && (
            <span className="ds-researchidea__pricegroup">
              <span className="ds-researchidea__pricelabel">Target</span>
              <span className="ds-researchidea__pricevalue">{targetPrice}</span>
            </span>
          )}
        </div>
      )}
      <div className="ds-researchidea__footer">
        {analystName && <span className="ds-researchidea__analyst">{analystName}</span>}
        {timeframe && <span className="ds-researchidea__timeframe">{timeframe}</span>}
        {confidence && <span className="ds-researchidea__confidence">{CONFIDENCE_LABEL[confidence]}</span>}
      </div>
    </div>
  );
}
