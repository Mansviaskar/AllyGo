interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export const Skeleton = ({ className = '', width, height, rounded = false }: SkeletonProps) => {
  return (
    <div 
      className={`
        bg-gray-800 animate-pulse
        ${rounded ? 'rounded-full' : 'rounded'}
        ${className}
      `}
      style={{ width, height }}
    />
  );
};

// Predefined skeleton components for common use cases
export const SkeletonCard = () => (
  <div className="bg-[#111] border border-gray-800 rounded-xl p-6 space-y-4">
    <Skeleton height="20px" width="60%" />
    <Skeleton height="16px" width="100%" />
    <Skeleton height="16px" width="80%" />
    <div className="flex gap-2">
      <Skeleton height="24px" width="60px" />
      <Skeleton height="24px" width="80px" />
    </div>
  </div>
);

export const SkeletonAvatar = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  return <Skeleton className={sizes[size]} rounded />;
};

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i}
        height="16px" 
        width={i === lines - 1 ? '70%' : '100%'} 
      />
    ))}
  </div>
);