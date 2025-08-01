import cn from "classnames";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn(className, "max-w-[1264px] px-5 m-auto")}>{children}</div>;
};
