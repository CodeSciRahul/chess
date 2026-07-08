import type { ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicComponentProps<
  C extends ElementType,
  Props = Record<string, never>,
> = Props &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | "as"> & {
    as?: C;
  };
