import { useParams } from "react-router-dom";
import { useSearchTracksQuery } from "../../app/services/musicApi";
import { SongCard } from "../../components/SongCard";
import { ControlMobileBar } from "../../components/ControlMobileBar";

export function SearchPage() {
  const { query } = useParams();

  const { data, isLoading, error } = useSearchTracksQuery(query || "", {
    skip: !query,
  });

  if (isLoading) return <div className="text-white p-10">Searching...</div>;
  if (error) return <div className="text-white p-10">Error occured</div>;

  return (
    <div className=" ml-0 lg:ml-49 mt-20">
      <h2 className="text-white text-2xl ml-5 mt-25 font-bold mb-6">
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
      <ControlMobileBar />
    </div>
  );
}
