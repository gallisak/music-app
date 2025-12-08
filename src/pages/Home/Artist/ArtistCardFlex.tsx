import { ArtistCard } from "./ArtistCard";

export function ArtistCardFlex() {
  return (
    <div className="flex scrollbar-none overflow-x-auto lg:pr-53 pr-2">
      <ArtistCard />
    </div>
  );
}
