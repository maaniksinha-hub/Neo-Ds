import { useState, type ReactNode } from 'react';
import './Carousel.css';

export interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
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
      <div className="ds-carousel__dots">
        {children.map((_, index) => (
          <span key={index} className={['ds-carousel__dot', index === active && 'ds-carousel__dot--selected'].filter(Boolean).join(' ')} />
        ))}
      </div>
    </div>
  );
}
