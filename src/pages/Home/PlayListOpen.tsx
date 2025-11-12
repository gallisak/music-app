import { ControlMobileBar } from "../../components/ControlMobileBar";
import { FriendsBar } from "../../components/FriendsBar";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
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
      <SideBar />
      <FriendsBar />
      <div>
        <div className="flex flex-col justify-center items-center mt-20">
          <img
            src={albumDetails?.cover_big}
            className="h-35 w-35 my-3 rounded-xl"
            alt=""
          />
          <h1 className="text-white text-[20px] mb-2">{albumDetails?.title}</h1>
        </div>
      </div>

      {tracksData &&
        tracksData.data.map((track) => {
          return (
            <SongCard
              key={track.id}
              photo={albumDetails?.cover_small}
              title={track.title}
              description={track.artist.name}
            />
          );
        })}
      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
