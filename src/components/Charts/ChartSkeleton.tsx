import './Charts.css';

export type ChartSkeletonSize = 'small' | 'medium' | 'large';

export interface ChartSkeletonProps {
  size?: ChartSkeletonSize;
  className?: string;
}

const HEIGHTS: Record<ChartSkeletonSize, number> = { small: 80, medium: 140, large: 200 };

/**
 * USE: chart-skeleton, chart-loader, chart-placeholder
 * WHEN: Placeholder skeleton while chart data is loading. Maintains layout space and signals incoming content.
 * PLATFORM: Global
 * VARIANTS: Size (small/medium/large).
 */
export function ChartSkeleton({ size = 'medium', className }: ChartSkeletonProps) {
  return <div className={['ds-chartskeleton', className].filter(Boolean).join(' ')} style={{ height: HEIGHTS[size] }} />;
}
