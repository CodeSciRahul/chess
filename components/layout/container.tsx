import type { ComponentProps } from "react";

import { containerPadding, containerSizes } from "@/constants/layout";
import { cn } from "@/lib/utils";

type ContainerSize = keyof typeof containerSizes;

type ContainerProps = ComponentProps<"div"> & {
  size?: ContainerSize;
  centered?: boolean;
};

function Container({
  size = "default",
  centered = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "w-full",
        containerSizes[size],
        containerPadding,
        centered && "mx-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container, type ContainerProps, type ContainerSize };
