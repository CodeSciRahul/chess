export const heroContent = {
  badge: "Online Chess",
  title: {
    lead: "Build the Future of",
    accent: "Online Chess",
  },
  subtitle: "Making the Best Move on the Way to the Top",
  description:
    "A complete chess platform to play, learn, compete, and grow—built to become the world's #1 destination for chess.",
  actions: {
    primary: { label: "Play Now", href: "/play" },
    secondary: { label: "Explore Puzzles", href: "/puzzles" },
  },
} as const;

/** Standard starting position, rank 8 → rank 1, for the static board preview. */
export const heroBoardPosition = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
] as const;

export const chessGlyphs: Record<string, string> = {
  k: "\u265A",
  q: "\u265B",
  r: "\u265C",
  b: "\u265D",
  n: "\u265E",
  p: "\u265F",
  K: "\u2654",
  Q: "\u2655",
  R: "\u2656",
  B: "\u2657",
  N: "\u2658",
  P: "\u2659",
};

export const pieceNames: Record<string, string> = {
  k: "king",
  q: "queen",
  r: "rook",
  b: "bishop",
  n: "knight",
  p: "pawn",
};
