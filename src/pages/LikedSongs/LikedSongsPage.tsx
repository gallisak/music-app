import { useAppSelector } from "../../app/hooks";
import { SongCard } from "../../components/SongCard";
import like from "../../assets/images/Active.png";
import { ControlMobileBar } from "../../components/Bar/ControlMobileBar";

export function LikedSongsPage() {
  const { likedTracks } = useAppSelector((state) => state.likedSongs);

  return (
    <div className="flex dark:bg-[#18181A] bg-[#a8a8a8] min-h-screen text-white">
      <main className="flex-1 pt-24 pl-3 lg:pl-50 pr-4 lg:pr-80">
        <div className="flex items-end gap-5 mb-8">
          <div className="w-40 h-40 bg-linear-to-br ml-4 from-indigo-500 to-purple-500 rounded shadow-lg flex items-center justify-center">
            <span>
              <img
                className="w-10 h-10"
                src={like}
                alt="logo for the cover of lickedsongs"
              />
            </span>
          </div>
          <div>
            <p className="text-sm font-bold dark:text-white text-black uppercase">
              Playlist
            </p>
            <h1 className="text-5xl dark:text-white text-black font-black mb-2">
              Liked Songs
            </h1>
            <p className=" dark:text-white text-black">
              {likedTracks.length} songs
            </p>
          </div>
        </div>

        <div className="flex lg:ml-2  mb-20 lg:mb-5 flex-col gap-2">
          {likedTracks.length > 0 ? (
            likedTracks.map((track) => (
              <SongCard
                key={track.id}
                track={track}
                title={track.title}
                description={track.artistName}
                photo={track.coverUrl}
                className="dark:hover:bg-[#2A2A2A] hover:bg-[#b9b9b9] w-full rounded-md transition-colors"
              />
            ))
          ) : (
            <div className="mt-10 dark:text-white text-black">
              You haven't liked any songs yet.
            </div>
          )}
        </div>
      </main>
      <ControlMobileBar />
    </div>
  );
}
