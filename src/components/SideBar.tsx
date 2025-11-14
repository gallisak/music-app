import headphones from "../assets/images/feather_headphones.png";
import libraryIcon from "../assets/images/icon-park-outline_folder-music-one.png";
import homeIcon from "../assets/images/free-icon-home-10995497.png";
import addMusic from "../assets/images/icon-park-outline_add-music.png";
import PhotoMusic from "../assets/images/Cover Album.png";
import airPlay from "../assets/images/AirPlay.png";
import like from "../assets/images/Active.png";
import { Link } from "react-router-dom";
import playblack from "../assets/images/playblack.png";
import next from "../assets/images/free-icon-next-724956.png";
import back from "../assets/images/free-icon-back-724956.png";

export function SideBar() {
  return (
    <aside className="bg-[#333333] fixed z-10 hidden lg:flex  w-50 h-full overflow-y-auto scrollbar-none flex-col top-0">
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

      <button className="flex p-3 bg-linear-to-bl gap-3 text-white from-[#1ED760] to-[#14612F] ml-3 mr-4 mt3 rounded-4xl hover:brightness-70">
        <img className="" src={addMusic} alt="Create Playlist Icon" />
        Create Playlist
      </button>
      <div className="w-41 mt-3 ml-4 border-[#464646] border-b-2 h-2"></div>

      <div className="ml-5 mt-5 text-[#ACACAC]">
        <p className="mb-3 hover:text-[#ffffff]">Your Top Song 2025</p>

        <p className="mb-3 hover:text-[#ffffff]">Cover Hits 2025</p>

        <p className="mb-3 hover:text-[#ffffff]">Anime Hits</p>

        <p className="mb-3 hover:text-[#ffffff]">Best Gaming Music </p>
      </div>

      <div className="flex flex-col justify-between items-center text-white">
        <img
          className="w-40 relative h-40"
          src={PhotoMusic}
          alt="photo of the song that is playing now"
        />
        <div className="absolute flex items-center gap-2 left-0 ml-12.5 mt-28 text-black font-bold">
          <button className="bg-white h-6 w-6 rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
            <img className="h-2 w-2" src={back} alt="" />
          </button>
          <button className="bg-white h-9 w-9 border-4 border-green-500 rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
            <img className="h-3 w-3" src={playblack} alt="play icon" />
          </button>
          <button className="bg-white h-6 w-6 rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
            <img className="h-2 w-2" src={next} alt="" />
          </button>
        </div>

        <div className="w-39 mt-3">
          <h1 className="font-bold text-[20px]">Delivery</h1>
          <div className="flex gap-4">
            <p className="text-[10px]">Ze-De, Board-Man</p>
            <img src={airPlay} alt="airPlay icon" />
            <img src={like} alt="like icon" />
          </div>
        </div>
      </div>
      <div className="h-8 mt-6 bg-green-400 flex  justify-center items-center">
        <p className="font-bold text-[12px]">
          Now Playing on Samsung S22 Ultra
        </p>
      </div>
    </aside>
  );
}
