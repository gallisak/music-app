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

  if (isLoadingTracks) return <div>Loading tracks from the album...</div>;
  if (tracksError) return <div>Error loading tracks!</div>;

  if (isLoadingDetails) return <div>Loading album details...</div>;

  return (
    <>
      <Header />
      <SideBar />
      <FriendsBar />
      return (
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
      );
      {tracksData &&
        tracksData.data.map((track) => {
          return (
            <SongCard
              className="ml-50"
              photo={albumDetails?.cover_big}
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
