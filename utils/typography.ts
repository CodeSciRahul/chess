import { cva, type VariantProps } from "class-variance-authority";

import { ds } from "@/constants/design-system";

export const headingVariants = cva(
  "font-heading font-semibold tracking-tight text-foreground",
  {
    variants: {
      level: {
        h1: "text-4xl leading-tight sm:text-5xl lg:text-6xl",
        h2: "text-3xl leading-tight sm:text-4xl",
        h3: "text-2xl leading-snug sm:text-3xl",
        h4: "text-xl leading-snug sm:text-2xl",
        h5: "text-lg leading-snug",
        h6: "text-base leading-snug",
      },
      gradient: {
        true: ds.gradient.text,
        false: "",
      },
      balance: {
        true: "text-balance",
        false: "",
      },
    },
    defaultVariants: {
      level: "h2",
      gradient: false,
      balance: true,
    },
  },
);

export const paragraphVariants = cva("text-foreground", {
  variants: {
    size: {
      default: "text-base leading-relaxed",
      lead: "text-lg leading-relaxed text-muted-foreground",
      small: "text-sm leading-normal",
      large: "text-lg leading-relaxed",
    },
    muted: {
      true: "text-muted-foreground",
      false: "",
    },
    balance: {
      true: "text-pretty",
      false: "",
    },
  },
  defaultVariants: {
    size: "default",
    muted: false,
    balance: false,
  },
});

export const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "text-base leading-relaxed",
      lead: "text-lg leading-relaxed text-muted-foreground",
      muted: "text-sm leading-normal text-muted-foreground",
      small: "text-sm leading-normal",
      large: "text-lg leading-relaxed",
    },
    balance: {
      true: "text-pretty",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    balance: false,
  },
});

export type HeadingLevel = NonNullable<
  VariantProps<typeof headingVariants>["level"]
>;

export type ParagraphSize = NonNullable<
  VariantProps<typeof paragraphVariants>["size"]
>;

export type TextVariant = NonNullable<
  VariantProps<typeof textVariants>["variant"]
>;
