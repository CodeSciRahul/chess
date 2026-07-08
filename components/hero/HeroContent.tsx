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
        "flex flex-col items-center text-center",
        "lg:items-start lg:text-left",
        className,
      )}
      {...props}
    >
      <HeroBadge>{badge}</HeroBadge>

      <div className="mt-6 flex flex-col sm:mt-7">
        <Heading id="hero-heading" level="h1" className="max-w-[20ch]">
          {title.lead}{" "}
          <span className={ds.gradient.text}>{title.accent}</span>
        </Heading>

        <Paragraph
          size="lead"
          balance
          className="mt-4 max-w-[42ch] font-medium text-foreground/90 sm:mt-5"
        >
          {subtitle}
        </Paragraph>
      </div>

      <Paragraph muted balance className="mt-5 max-w-[58ch] sm:mt-6">
        {description}
      </Paragraph>

      <HeroActions className="mt-8 sm:mt-10" />
    </div>
  );
}

export { HeroContent, type HeroContentProps };
