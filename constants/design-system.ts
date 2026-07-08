/**
 * Design system utility class names.
 * Styles are defined once in styles/utilities/*.css — this file only maps names.
 */
export const ds = {
  gradient: {
    primary: "gradient-primary",
    primaryHorizontal: "gradient-primary-horizontal",
    subtle: "gradient-subtle",
    radial: "gradient-radial",
    text: "gradient-text",
    border: "gradient-border",
    glow: "gradient-glow",
  },
  glass: {
    default: "glass",
    subtle: "glass-subtle",
    strong: "glass-strong",
    highlight: "glass-highlight",
  },
  hover: {
    lift: "hover-lift",
    scale: "hover-scale",
    glow: "hover-glow",
    brightness: "hover-brightness",
    border: "hover-border",
    textPrimary: "hover-text-primary",
    press: "active-press",
    focusRing: "focus-ring",
  },
  animate: {
    fadeIn: "animate-fade-in",
    fadeInUp: "animate-fade-in-up",
    fadeInDown: "animate-fade-in-down",
    scaleIn: "animate-scale-in",
    slideInRight: "animate-slide-in-right",
    shimmer: "animate-shimmer",
    pulseGlow: "animate-pulse-glow",
    spinSlow: "animate-spin-slow",
  },
  shadow: {
    card: "shadow-card",
    elevated: "shadow-elevated",
    glow: "shadow-glow-sm",
    glowLg: "shadow-glow",
  },
} as const;
