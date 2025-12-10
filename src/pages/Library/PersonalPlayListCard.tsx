import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { type Playlist } from "../../app/features/playlist/playlistSlice";
import coverPlaceholder from "../../assets/images/Cover.png";

interface Props {
  playlist: Playlist;
}

export function PersonalPlayListCard({ playlist }: Props) {
  const userName = useAppSelector((state) => state.user.user?.name) || "User";

  const coverImage =
    playlist.tracks.length > 0 ? playlist.tracks[0].coverUrl : coverPlaceholder;

  return (
    <div className="lg:mr-50 mr-0 mb-4">
      <Link to={`/playlist/${playlist.id}`}>
        <div className="h-30 border-b-2 flex w-full dark:bg-[#232323] bg-[#787878] overflow-hidden hover:brightness-70 transition-all cursor-pointer">
          <div className="h-full ml-5 flex justify-start items-center">
            <img
              src={coverImage}
              className="h-24 w-24 relative object-cover rounded-md shadow-lg"
              alt="playlist cover"
            />
          </div>

          <div className="relative z-0 flex flex-col justify-center w-full">
            <h1 className="dark:text-white text-black text-[25px] mb-2 ml-6 font-bold truncate pr-4">
              {playlist.name}
            </h1>
            <p className="dark:text-gray-400 text-gray-200 ml-6 mr-6 text-[12px]">
              User Playlist • {userName}
            </p>
            <p className="dark:text-gray-500 text-gray-300 ml-6 text-[11px] mt-1">
              {playlist.tracks.length}{" "}
              {playlist.tracks.length === 1 ? "song" : "songs"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
