import cn from "classnames";

interface TechnologySkeletonProps {
  className?: string;
}

export const TechnologySkeleton = ({ className }: TechnologySkeletonProps) => (
  <div className={cn(className, "text-center transition-all animate-pulse")}>
    <div className="w-[40px] h-[40px] m-auto mb-4 bg-gray-200 rounded" />
    <div className="h-4 w-3/4 m-auto bg-gray-100 rounded" />
  </div>
);
