"use client";

import { cn } from "@/lib/utils";

type BasicContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BasicContainer({
  children,
  className,
}: BasicContainerProps) {
  return (
    <div
      className={cn(
        "flex size-fit items-center justify-center rounded-lg p-3",
        className
      )}
    >
      {children}
    </div>
  );
}
