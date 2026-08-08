import './gCarouselDots.css';

/**
 * USE: carousel-indicator, page-dots, carousel-pagination
 * WHEN: Dot indicators showing current position within a carousel. Building block used by mCarousel and wCarousel.
 * PLATFORM: Global
 * VARIANTS: Active/inactive dot state.
 */
export interface GCarouselDotsProps {
  count: number;
  active: number;
  className?: string;
}

export function GCarouselDots({ count, active, className }: GCarouselDotsProps) {
  return (
    <div className={['ds-carousel__dots', className].filter(Boolean).join(' ')}>
      {Array.from({ length: count }, (_, index) => (
        <span key={index} className={['ds-carousel__dot', index === active && 'ds-carousel__dot--selected'].filter(Boolean).join(' ')} />
      ))}
    </div>
  );
}
