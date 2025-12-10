import headphones from "../../../assets/images/feather_headphones.png";
import libraryIcon from "../../../assets/images/icon-park-outline_folder-music-one.png";
import homeIcon from "../../../assets/images/free-icon-home-10995497.png";
import { Link } from "react-router-dom";
import { CreatePlaylist } from "./CreatePlaylist";
import { MiniPlayer } from "./MiniPlayer";
import { useAppSelector } from "../../../app/hooks";

export function SideBar() {
  const playlists = useAppSelector((state) => state.playlists.playlists);

  return (
    <aside className="dark:bg-[#333333] bg-[#939393] fixed z-11 hidden lg:flex w-50 h-full overflow-y-auto scrollbar-none flex-col top-0">
      <div className="flex items-center justify-center flex-col">
        <Link
          to="/"
          className="text-3xl font-bold dark:text-[#1ED760] text-[#000] mt-3"
        >
          Music-app
        </Link>
        <p className="dark:text-[#006724] text-[#000]">by gallisak</p>
      </div>

      <div className="ml-5 mt-5 text-[#ACACAC]">
        <div className="mb-3 pl-2 bg-[#000] dark:bg-[#333333] w-40 h-8 rounded-sm flex items-center gap-2 ">
          <img src={homeIcon} alt="Home icon" />
          <Link className="dark:hover:text-[#ffffff]" to="/">
            Home
          </Link>
        </div>
        <div className="mb-3 pl-2 bg-[#000] dark:bg-[#333333] w-40 h-8 rounded-sm flex items-center gap-2 ">
          <img src={libraryIcon} alt="Library Icon" />
          <Link className="dark:hover:text-[#ffffff]" to="/Library">
            Your Library
          </Link>
        </div>
        <div className="mb-3 pl-2 bg-[#000] dark:bg-[#333333] w-40 h-8 rounded-sm flex items-center gap-2 ">
          <img src={headphones} alt="Liked songs Icon" />
          <Link className="dark:hover:text-[#ffffff]" to="/LikedSongs">
            Liked Songs
          </Link>
        </div>
      </div>

      <CreatePlaylist />

      <div className="w-41 mt-3 ml-4 border-[#464646] border-b-2 h-2"></div>

      <MiniPlayer />

      <div className="ml-5 mt-5 dark:text-[#ACACAC] text-white overflow-y-auto max-h-60 scrollbar-none">
        {playlists.length === 0 && <p className="text-sm">No playlists yet</p>}

        {playlists.map((playlist) => (
          <Link
            key={playlist.id}
            to={`/playlist/${playlist.id}`}
            className="block mb-1 hover:text-[#ffffff] truncate"
          >
            <div
              key={playlist.id}
              className="bg-[#060606] p-1 flex items-center rounded-l-2xl"
            >
              {playlist.name}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
