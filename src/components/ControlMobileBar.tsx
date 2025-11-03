import homeIcon from "../assets/images/free-icon-home-10995497.png";
import addMusic from "../assets/images/icon-park-outline_add-music.png";
import libraryIcon from "../assets/images/icon-park-outline_folder-music-one.png";
import headphones from "../assets/images/feather_headphones.png";

export function ControlMobileBar() {
  return (
    <div className="bg-[#18181A] flex justify-between w-full h-15 z-0 lg:hidden fixed bottom-0">
      <div className="flex flex-col justify-center items-center ml-10">
        <img src={homeIcon} className="w-6" alt="Home Icon" />
        <p className="text-white">Home</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={libraryIcon} className="w-6" alt="Home Icon" />
        <p className="text-white">Your Library</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={headphones} className="w-6" alt="Home Icon" />
        <p className="text-white">Liked Songs</p>
      </div>
      <div className="flex flex-col justify-center items-center mr-10">
        <img src={addMusic} className="w-6" alt="Home Icon" />
        <p className="text-white">Create Playlist</p>
      </div>
    </div>
  );
}
