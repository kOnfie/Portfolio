import cn from "classnames";

interface SkeletonCompaniesProps {
  className?: string;
}

export const SkeletonCompanies = ({ className }: SkeletonCompaniesProps) => (
  <div className={cn(className, "relative flex gap-14 animate-pulse")}>
    <div className="relative z-10">
      <div className="absolute top-[-6px] left-[-6px] w-16 h-16 rounded-full bg-gray-300/30 border-2 border-[var(--color-primary)] flex items-center justify-center" />
    </div>

    <div className="flex-1 ml-6">
      <div className="h-4 w-24 bg-gray-300/25 mb-2 rounded" />

      <div className="h-6 w-48 bg-gray-300/40 mb-2 rounded" />

      <div className="h-4 w-32 bg-gray-300/30 mb-4 rounded" />

      <div className="h-4 w-full bg-gray-300/20 mb-1 rounded" />
      <div className="h-4 w-2/3 bg-gray-300/15 mb-3 rounded" />
    </div>
  </div>
);
