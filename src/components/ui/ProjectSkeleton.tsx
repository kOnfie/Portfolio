import cn from "classnames";
import { SkeletonSeparator } from "./SkeletonSeparator";

interface ProjectSkeletonProps {
  className?: string;
}

export const ProjectSkeleton = ({ className }: ProjectSkeletonProps) => {
  return (
    <div className={cn(className, "flex justify-between items-center gap-[48px] animate-pulse max-md:flex-col")}>
      <div className="w-[49%] bg-[--bg-secondary] rounded-[12px] px-5 py-[127px] grid place-content-center">
        <div className="rounded-[12px] bg-gray-300/30 max-h-[400px] w-full aspect-[4/3]" />
      </div>
      <div className="text-left flex-1">
        <div className="h-8 w-1/2 bg-gray-300/40 mb-4 rounded" />

        <div className="h-5 w-3/4 bg-gray-300/30 mb-[32px] rounded" />

        <div className="flex justify-between items-center gap-4">
          <div className="h-4 w-14 bg-gray-300/30 rounded" />
          <div className="h-4 w-12 bg-gray-300/30 rounded" />
        </div>

        <div className="my-4">
          <SkeletonSeparator />
        </div>

        {/* Role */}
        <div className="flex justify-between items-center gap-4">
          <div className="h-4 w-10 bg-gray-300/30 rounded" />
          <div className="h-4 w-20 bg-gray-300/30 rounded" />
        </div>

        <div className="my-4">
          <SkeletonSeparator />
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="h-4 w-32 bg-gray-300/30 rounded" />
          <div className="h-4 w-32 bg-gray-300/30 rounded" />
        </div>

        <div className="mt-4 mb-[48px]">
          <SkeletonSeparator />
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <div className="h-6 w-32 bg-gray-300/30 rounded" />
          <div className="h-6 w-36 bg-gray-300/30 rounded" />
        </div>
      </div>
    </div>
  );
};
