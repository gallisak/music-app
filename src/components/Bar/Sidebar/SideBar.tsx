import headphones from "../../../assets/images/feather_headphones.png";
import libraryIcon from "../../../assets/images/icon-park-outline_folder-music-one.png";
import homeIcon from "../../../assets/images/free-icon-home-10995497.png";
import { Link } from "react-router-dom";
import { CreatePlaylist } from "./CreatePlaylist";
import { MiniPlayer } from "./MiniPlayer";

export function SideBar() {
  return (
    <aside className="bg-[#333333] fixed z-11 hidden lg:flex w-50 h-full overflow-y-auto scrollbar-none flex-col top-0">
      <div className="flex items-center justify-center flex-col">
        <Link to="/" className="text-3xl font-bold text-[#1ED760] mt-3">
          Music-app
        </Link>
        <p className="text-[#006724]">by gallisak</p>
      </div>

      <div className="ml-5 mt-5 text-[#ACACAC]">
        <div className="mb-3 flex gap-2 w-6 h-6 ">
          <img src={homeIcon} alt="Home icon" />
          <Link className="hover:text-[#ffffff]" to="/">
            Home
          </Link>
        </div>
        <div className="mb-3 flex gap-2">
          <img src={libraryIcon} alt="Library Icon" />
          <Link className="hover:text-[#ffffff]" to="/Library">
            Your Library
          </Link>
        </div>
        <div className="mb-3 flex gap-2">
          <img src={headphones} alt="Liked songs Icon" />
          <Link className="hover:text-[#ffffff]" to="/LikedSongs">
            Liked Songs
          </Link>
        </div>
      </div>

      <CreatePlaylist />

      <div className="w-41 mt-3 ml-4 border-[#464646] border-b-2 h-2"></div>

      <div className="ml-5 mt-5 text-[#ACACAC]">
        <p className="mb-3 hover:text-[#ffffff]">Your Top Song 2025</p>
        <p className="mb-3 hover:text-[#ffffff]">Cover Hits 2025</p>
        <p className="mb-3 hover:text-[#ffffff]">Anime Hits</p>
        <p className="mb-3 hover:text-[#ffffff]">Best Gaming Music </p>
      </div>

      <MiniPlayer />
    </aside>
  );
}
