import { useAppSelector } from "../app/hooks";
import { SongCard } from "./SongCard";

export function HistoryBar() {
  const { history } = useAppSelector((state) => state.player);

  return (
    <aside className="bg-[#2A2A2A]/30 backdrop-blur-lg fixed hidden top-0 z-1 overflow-y-auto scrollbar-none lg:block h-full w-50 right-0">
      <span className="w-full flex justify-center">
        <h2 className="text-white font-bold mb-4 mt-22 text-lg">
          Recently Played
        </h2>
      </span>

      {history.length > 0 ? (
        <div className="flex flex-col gap-4">
          {history.map((track) => (
            <SongCard
              key={track.id}
              track={track}
              title={track.title}
              description={track.artistName}
              photo={track.coverUrl}
              className="w-full bg-transparent border-none p-0 hover:bg-[#2A2A2A] rounded-md transition-colors"
            />
          ))}
        </div>
      ) : (
        <span className="w-full flex justify-center">
          <p className="text-white font-bold mb-4 ml-2 text-sm ">
            You haven't played any songs yet.
          </p>
        </span>
      )}
    </aside>
  );
}
