import { ControlMobileBar } from "../../components/ControlMobileBar";
import { HistoryBar } from "../../components/HistoryBar";
import { Header } from "../../components/Header";
import { SongCard } from "../../components/SongCard";
import { useParams } from "react-router-dom";
import {
  useGetArtistDetailsQuery,
  useGetArtistTracksQuery,
} from "../../app/services/musicApi";

export function ArtistCardOpen() {
  const { artistId } = useParams();

  const numericArtistId = Number(artistId);

  const { error, data, isLoading } = useGetArtistTracksQuery(numericArtistId, {
    skip: !numericArtistId,
  });
  const {
    data: dataArtist,
    error: errorArtist,
    isLoading: isLoadingArtist,
  } = useGetArtistDetailsQuery(numericArtistId);

  if (error) {
    return (
      <span>
        <h1 className="ml-5 font-bold">Upload error</h1>
      </span>
    );
  }

  if (errorArtist) {
    return (
      <span>
        <h1 className="ml-5 font-bold">Upload error</h1>
      </span>
    );
  }

  if (isLoadingArtist) {
    return (
      <div className="min-h-100 min-w-100 flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-100 min-w-100 flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <HistoryBar />

      <div className="flex flex-col justify-center items-center mt-20">
        <img
          src={dataArtist?.picture_big}
          className="h-35 w-35 my-3 rounded-2xl"
          alt="artist's photo"
        />
        <h1 className="text-white mb-5 text-[20px]">{dataArtist?.name}</h1>
      </div>

      {data?.data?.map((track) => {
        return (
          <SongCard
            key={track.id}
            className="h-fit ml-0 lg:ml-50 lg:mr-50 pb-1 pt-2"
            photo={track.album.cover_xl}
            title={track.title}
            description={`${dataArtist?.name} • ${track.title}`}
            track={track}
          />
        );
      })}

      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
