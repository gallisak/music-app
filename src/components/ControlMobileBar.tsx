import homeIcon from "../assets/images/free-icon-home-10995497.png";
import addMusic from "../assets/images/icon-park-outline_add-music.png";
import libraryIcon from "../assets/images/icon-park-outline_folder-music-one.png";
import headphones from "../assets/images/feather_headphones.png";
import { Link } from "react-router-dom";

export function ControlMobileBar() {
  return (
    <div className="bg-[#18181A] flex justify-between w-full h-15 z-0 lg:hidden fixed bottom-0">
      <div className=" flex justify-center items-center  ml-5">
        <Link
          className="flex flex-col text-[10px] justify-center items-center"
          to="/"
        >
          <img src={homeIcon} className="w-6" alt="Home Icon" />
          <p className="text-white">Home</p>
        </Link>
      </div>
      <div className=" flex justify-center items-center ">
        <Link
          className="flex flex-col text-[10px] justify-center items-center"
          to="/Library"
        >
          <img src={libraryIcon} className="w-6" alt="Library Icon" />
          <p className="text-white">Your Library</p>
        </Link>
      </div>
      <Link
        className="flex flex-col text-[10px] justify-center items-center"
        to="/LikedSongs"
      >
        <img src={headphones} className="w-6" alt="Liked songs Icon" />
        <p className="text-white">Liked Songs</p>
      </Link>
      <Link
        className="flex flex-col text-[10px] justify-center items-center mr-5"
        to=""
      >
        <img src={addMusic} className="w-6" alt="Create Playlist Icon" />
        <p className="text-white">Create Playlist</p>
      </Link>
    </div>
  );
}
