import type { ComponentProps } from "react";

import { Container } from "@/components/layout";
import { ds } from "@/constants/design-system";
import { sectionSpacing } from "@/constants/layout";
import { cn } from "@/lib/utils";

import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

type HeroProps = ComponentProps<"section">;

function Hero({ className, ...props }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate w-full overflow-hidden",
        sectionSpacing.lg,
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className={cn(
          ds.gradient.radial,
          "pointer-events-none absolute inset-0 -z-10",
        )}
      />

      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-12",
            "lg:grid-cols-2 lg:gap-16",
          )}
        >
          <HeroContent />
          <div className="flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero, type HeroProps };
