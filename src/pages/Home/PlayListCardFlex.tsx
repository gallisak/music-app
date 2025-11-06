import { PlayListCard } from "./PlayListCard";

export function PlayListCardGrid() {
  return (
    <div className="flex scrollbar-none overflow-x-auto pr-53">
      <PlayListCard />
    </div>
  );
}
