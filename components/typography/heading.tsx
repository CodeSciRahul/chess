import type { ComponentProps } from "react";

import {
  headingVariants,
  type HeadingLevel,
} from "@/utils/typography";
import { cn } from "@/lib/utils";

type HeadingProps = ComponentProps<"h1"> & {
  level?: HeadingLevel;
  as?: HeadingLevel;
  gradient?: boolean;
  balance?: boolean;
};

const headingElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

function Heading({
  level = "h2",
  as,
  gradient = false,
  balance = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as ?? headingElements[level];

  return (
    <Component
      className={cn(headingVariants({ level, gradient, balance }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Heading, type HeadingProps, type HeadingLevel };
