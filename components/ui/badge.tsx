import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { ds } from "@/constants/design-system";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1",
    "rounded-full border px-2.5 py-0.5",
    "text-xs font-medium whitespace-nowrap",
    "transition-colors duration-[var(--duration-fast)]",
    ds.hover.focusRing,
  ],
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/15 text-primary",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
        success:
          "border-transparent bg-success/15 text-success",
        warning:
          "border-transparent bg-warning/15 text-warning",
        destructive:
          "border-transparent bg-destructive/15 text-destructive",
        gradient: [
          ds.gradient.primary,
          "border-transparent text-primary-foreground",
        ],
        glass: [ds.glass.subtle, "text-foreground"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants, type BadgeProps };
