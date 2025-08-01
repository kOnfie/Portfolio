import cn from "classnames";
import { type ReactNode } from "react";

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export const Title = ({ className, children }: TitleProps) => {
  return (
    <h2
      className={cn(
        "uppercase text-[76px] font-bebas-neue line leading-none mb-2 max-lg:text-[62px] max-ss:text-[40px]",
        className
      )}
    >
      {children}
    </h2>
  );
};
