import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { textVariants, type TextVariant } from "@/utils/typography";

type TextProps = ComponentProps<"p"> & {
  variant?: TextVariant;
  as?: "p" | "span" | "div";
  balance?: boolean;
};

function Text({
  variant = "default",
  as: Component = "p",
  balance = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant, balance }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Text, type TextProps, type TextVariant };
