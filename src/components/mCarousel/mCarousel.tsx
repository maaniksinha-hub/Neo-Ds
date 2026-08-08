import { useState, type ReactNode } from 'react';
import { GCarouselDots } from '../gCarouselDots/gCarouselDots';
import './mCarousel.css';

export interface MCarouselProps {
  children: ReactNode[];
  className?: string;
}

/**
 * USE: mobile-carousel, swipeable-cards, card-slider
 * WHEN: Horizontally swipeable card carousel — promotions, onboarding slides, feature highlights.
 * PLATFORM: Mobile
 * VARIANTS: Card count indicator, with/without auto-play.
 * INSTEAD-OF: Use wCarousel for web.
 */
export function MCarousel({ children, className }: MCarouselProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={['ds-carousel', className].filter(Boolean).join(' ')}>
      <div className="ds-carousel__track" onScroll={(e) => {
        const target = e.currentTarget;
        const index = Math.round(target.scrollLeft / target.clientWidth);
        setActive(index);
      }}>
        {children.map((child, index) => (
          <div className="ds-carousel__slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <GCarouselDots count={children.length} active={active} />
    </div>
  );
}
