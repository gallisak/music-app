import { ControlMobileBar } from "../../components/ControlMobileBar";
import { HistoryBar } from "../../components/HistoryBar";
import { Header } from "../../components/Header";
import { SongCard } from "../../components/SongCard";
import { useParams } from "react-router-dom";
import {
  useGetAlbumTracksQuery,
  useGetAlbumDetailsQuery,
} from "../../app/services/musicApi";

export function PlayListOpen() {
  const { albumId } = useParams();

  const numericAlbumId = Number(albumId);

  const {
    data: tracksData,
    isLoading: isLoadingTracks,
    error: tracksError,
  } = useGetAlbumTracksQuery(numericAlbumId, { skip: !numericAlbumId });

  const { data: albumDetails, isLoading: isLoadingDetails } =
    useGetAlbumDetailsQuery(numericAlbumId, { skip: !numericAlbumId });

  if (isLoadingTracks)
    return (
      <div className="min-h-100 min-w-100 flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></div>
      </div>
    );
  if (tracksError) return <div>Error loading tracks!</div>;

  if (isLoadingDetails) return;

  return (
    <>
      <Header />
      <HistoryBar />
      <div>
        <div className="flex justify-start items-start lg:ml-55 ml-5  mt-20">
          <img
            src={albumDetails?.cover_big}
            className="h-35 w-35 my-3 rounded-xl"
            alt="album photo"
          />
          <div>
            <h1 className="text-white font-black text-4xl ml-5 mt-5 mb-2">
              {albumDetails?.title}
            </h1>
            {tracksData &&
              tracksData.data.slice(0, 1).map((artist) => {
                return (
                  <h1
                    key={artist.id}
                    className="text-white text-2xl ml-5 mt-5 mb-2"
                  >
                    {artist.artist.name}
                  </h1>
                );
              })}
          </div>
        </div>
      </div>

      {tracksData &&
        tracksData.data.map((track) => {
          return (
            <SongCard
              className="h-fit ml-0 lg:ml-50 lg:mr-50 pb-1 pt-2 "
              key={track.id}
              photo={albumDetails?.cover_xl}
              title={track.title}
              description={track.artist.name}
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
