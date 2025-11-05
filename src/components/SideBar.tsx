import headphones from "../assets/images/feather_headphones.png";
import libraryIcon from "../assets/images/icon-park-outline_folder-music-one.png";
import homeIcon from "../assets/images/free-icon-home-10995497.png";
import addMusic from "../assets/images/icon-park-outline_add-music.png";
import PhotoMusic from "../assets/images/Cover Album.png";
import airPlay from "../assets/images/AirPlay.png";
import like from "../assets/images/Active.png";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="bg-[#333333] fixed z-10 hidden lg:flex justify-between w-50 h-full  flex-col top-0">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold text-[#1ED760] mt-3">Music-app</h1>
        <p className="text-[#006724]">by gallisak</p>
      </div>
      <div className="ml-5 mt-5 text-[#ACACAC]">
        <div className="mb-3 flex gap-2 w-6 h-6 ">
          <img src={homeIcon} alt="" />
          <Link to="/">Home</Link>
        </div>
        <div className="mb-3 flex gap-2">
          <img src={libraryIcon} alt="" />
          <Link to="/Library">Your Library</Link>
        </div>
        <div className="mb-3 flex gap-2">
          <img src={headphones} alt="" />
          <Link to="/LikedSongs">Liked Songs</Link>
        </div>
      </div>

      <button className="flex p-3 bg-linear-to-bl gap-3 text-white from-[#1ED760] to-[#14612F] ml-3 mr-4 mt3 rounded-4xl ">
        <img className="" src={addMusic} alt="" />
        Create Playlist
      </button>
      <div className="w-41 mt-3 ml-4 border-[#464646] border-b-2 h-2"></div>

      <div className="ml-5 mt-5 text-[#ACACAC]">
        <p className="mb-3">Your Top Song 2025</p>

        <p className="mb-3">Cover Hits 2025</p>

        <p className="mb-3">Anime Hits</p>

        <p className="mb-3">Best Gaming Music </p>
      </div>

      <div className="flex flex-col justify-between items-center text-white">
        <img className="w-40 h-40" src={PhotoMusic} alt="" />
        <div className="w-39 mt-3">
          <h1 className="font-bold text-[20px]">Delivery</h1>
          <div className="flex gap-4">
            <p className="text-[10px]">Ze-De, Board-Man</p>
            <img src={airPlay} alt="" />
            <img src={like} alt="" />
          </div>
        </div>
      </div>
      <div className="h-8 mt-6 bg-green-400 flex justify-center items-center">
        <p className="font-bold text-[12px]">
          Now Playing on Samsung S22 Ultra
        </p>
      </div>
    </aside>
  );
}
