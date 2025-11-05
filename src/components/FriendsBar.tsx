import { ListeningToCard } from "./ListeningToCard";
import { SuggestToFollowCard } from "./SuggestToFollowCard";

export function FriendsBar() {
  return (
    <aside className="bg-[#2A2A2A]/30 backdrop-blur-2xl fixed hidden top-0 z-1 lg:block h-full w-50 right-0">
      <div className="mt-25">
        <h1 className="ml-6 mt-3 text-white text-[18px]">
          Friend’s Listening To
        </h1>
        <div className="flex items-center flex-col mt-6 mb-3">
          <ListeningToCard />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="  text-white mb-5 text-[18px]">Suggest to Follow</h1>

          <SuggestToFollowCard />
        </div>
      </div>
    </aside>
  );
}
