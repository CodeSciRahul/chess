export const zIndex = {
  behind: -1,
  base: 0,
  raised: 1,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  toast: 800,
  max: 9999,
} as const;

export type ZIndexLayer = keyof typeof zIndex;
