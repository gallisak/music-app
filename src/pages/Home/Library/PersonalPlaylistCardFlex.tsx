import { PersonalPlayListCard } from "./PersonalPlayListCard";

export function PersonalPlayListCardFlex() {
  return (
    <div className="flex flex-col w-full">
      <PersonalPlayListCard />
      <PersonalPlayListCard />
      <PersonalPlayListCard />
      <PersonalPlayListCard />
    </div>
  );
}
