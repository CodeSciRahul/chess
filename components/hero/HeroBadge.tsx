import { Sparkles } from "lucide-react";
import type { ComponentProps } from "react";

import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

type HeroBadgeProps = Omit<ComponentProps<typeof Badge>, "variant">;

function HeroBadge({ className, children, ...props }: HeroBadgeProps) {
  return (
    <Badge
      variant="glass"
      className={cn(
        "gap-1.5 px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase",
        className,
      )}
      {...props}
    >
      <Sparkles aria-hidden className="size-3.5 text-primary" />
      {children}
    </Badge>
  );
}

export { HeroBadge, type HeroBadgeProps };
