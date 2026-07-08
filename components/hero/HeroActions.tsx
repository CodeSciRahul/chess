import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui";
import { heroContent } from "@/constants/hero";
import { cn } from "@/lib/utils";

type HeroActionsProps = ComponentProps<"div">;

function HeroActions({ className, ...props }: HeroActionsProps) {
  const { primary, secondary } = heroContent.actions;

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4",
        className,
      )}
      {...props}
    >
      <Link
        href={primary.href}
        className={cn(buttonVariants({ variant: "gradient", size: "lg" }))}
      >
        {primary.label}
        <ArrowRight aria-hidden />
      </Link>
      <Link
        href={secondary.href}
        className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
      >
        {secondary.label}
      </Link>
    </div>
  );
}

export { HeroActions, type HeroActionsProps };
