import cn from "classnames";

interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className }: SeparatorProps) => {
  return <div className={cn(className, "w-full h-[1px] bg-[#484848]")}></div>;
};
