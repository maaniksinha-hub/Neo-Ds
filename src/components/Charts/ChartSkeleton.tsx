import './Charts.css';

export type ChartSkeletonSize = 'small' | 'medium' | 'large';

export interface ChartSkeletonProps {
  size?: ChartSkeletonSize;
  className?: string;
}

const HEIGHTS: Record<ChartSkeletonSize, number> = { small: 80, medium: 140, large: 200 };

export function ChartSkeleton({ size = 'medium', className }: ChartSkeletonProps) {
  return <div className={['ds-chartskeleton', className].filter(Boolean).join(' ')} style={{ height: HEIGHTS[size] }} />;
}
