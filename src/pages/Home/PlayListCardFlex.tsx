import { PlayListCard } from "./PlayListCard";

export function PlayListCardGrid() {
  return (
    <div className="flex scrollbar-none overflow-x-auto lg:pr-53 pr-2">
      <PlayListCard />
    </div>
  );
}
