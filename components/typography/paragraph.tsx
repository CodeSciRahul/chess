import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import {
  paragraphVariants,
  type ParagraphSize,
} from "@/utils/typography";

type ParagraphProps = ComponentProps<"p"> & {
  size?: ParagraphSize;
  muted?: boolean;
  balance?: boolean;
};

function Paragraph({
  size = "default",
  muted = false,
  balance = false,
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(paragraphVariants({ size, muted, balance }), className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { Paragraph, type ParagraphProps, type ParagraphSize };
