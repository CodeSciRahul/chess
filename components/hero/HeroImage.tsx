import type { ComponentProps } from "react";

import { ds } from "@/constants/design-system";
import {
  chessGlyphs,
  heroBoardPosition,
  pieceNames,
} from "@/constants/hero";
import { cn } from "@/lib/utils";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

type HeroImageProps = ComponentProps<"div">;

function HeroImage({ className, ...props }: HeroImageProps) {
  return (
    <div
      className={cn("w-full max-w-md lg:max-w-lg", className)}
      {...props}
    >
      <div
        className={cn(
          ds.glass.strong,
          ds.shadow.glow,
          "rounded-3xl p-3 sm:p-4",
        )}
      >
        <div
          role="img"
          aria-label="Chess board in the standard starting position"
          className="grid aspect-square grid-cols-8 overflow-hidden rounded-xl ring-1 ring-white/10"
        >
          {heroBoardPosition.map((row, rankIndex) =>
            row.map((piece, fileIndex) => {
              const isDark = (rankIndex + fileIndex) % 2 === 1;
              const squareId = `${FILES[fileIndex]}${8 - rankIndex}`;
              const color = piece === piece.toUpperCase() ? "white" : "black";

              return (
                <div
                  key={squareId}
                  className={cn(
                    "flex items-center justify-center",
                    "text-2xl leading-none select-none sm:text-3xl lg:text-4xl",
                    isDark ? "bg-[#769656]" : "bg-[#eeeed2]",
                  )}
                >
                  {piece ? (
                    <span
                      aria-label={`${color} ${pieceNames[piece.toLowerCase()]}`}
                      className={cn(
                        "drop-shadow-sm",
                        piece === piece.toUpperCase()
                          ? "text-white"
                          : "text-zinc-900",
                      )}
                    >
                      {chessGlyphs[piece]}
                    </span>
                  ) : null}
                </div>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}

export { HeroImage, type HeroImageProps };
