import { PlayListCard } from "./PlayListCard";
import { PodcastCard } from "./PodcastCard";

export function HomePage() {
  return (
    <>
      <h1 className="mb-5 mt-5 ml-5 lg:ml-54 text-white text-[34px]">
        Hot Today
      </h1>

      <div className="h-80 ml-0 lg:ml-50 flex">
        <PlayListCard />
      </div>

      <h1 className="mb-5 mt-5 ml-5 lg:ml-54 text-white text-[34px]">
        Enjoy Your Day
      </h1>

      <div className="h-41 ml-0 lg:ml-50 mb-10 flex">
        <PodcastCard />
      </div>
    </>
  );
}
