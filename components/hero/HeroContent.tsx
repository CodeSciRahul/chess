import type { ComponentProps } from "react";

import { Heading, Paragraph } from "@/components/typography";
import { ds } from "@/constants/design-system";
import { heroContent } from "@/constants/hero";
import { cn } from "@/lib/utils";

import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";

type HeroContentProps = ComponentProps<"div">;

function HeroContent({ className, ...props }: HeroContentProps) {
  const { badge, title, subtitle, description } = heroContent;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 text-center",
        "lg:items-start lg:text-left",
        className,
      )}
      {...props}
    >
      <HeroBadge>{badge}</HeroBadge>

      <div className="flex flex-col gap-4">
        <Heading id="hero-heading" level="h1" className="max-w-2xl">
          {title.lead}{" "}
          <span className={ds.gradient.text}>{title.accent}</span>
        </Heading>

        <Paragraph size="lead" className="max-w-xl">
          {subtitle}
        </Paragraph>
      </div>

      <Paragraph muted className="max-w-xl">
        {description}
      </Paragraph>

      <HeroActions className="mt-2" />
    </div>
  );
}

export { HeroContent, type HeroContentProps };
