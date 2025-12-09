import { useParams } from "react-router-dom";
import { useSearchTracksQuery } from "../../app/services/musicApi";
import { SongCard } from "../../components/SongCard";
import { ControlMobileBar } from "../../components/Bar/MobileBar/ControlMobileBar";
import { MobileMiniPlayer } from "../../components/Bar/MobileBar/MobileMiniPlayer";

export function SearchPage() {
  const { query } = useParams();

  const { data, isLoading, error } = useSearchTracksQuery(query || "", {
    skip: !query,
  });

  if (isLoading)
    return (
      <div className="min-h-100 min-w-100 flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></div>
      </div>
    );
  if (error)
    return <div className="dark:text-white text-black p-10">Error occured</div>;

  return (
    <div className=" ml-0 lg:ml-49 mt-20">
      <h2 className="dark:text-white text-black text-2xl ml-5 mt-25 font-bold mb-6">
        Search results for: <span className="text-green-500">{query}</span>
      </h2>

      <div className="flex flex-col">
        {data?.data.map((track) => (
          <SongCard
            key={track.id}
            track={track}
            title={track.title}
            description={track.artist.name}
            photo={track.album.cover_xl}
            className="lg:mr-50"
          />
        ))}
      </div>
      <MobileMiniPlayer />
      <ControlMobileBar />
    </div>
  );
}
