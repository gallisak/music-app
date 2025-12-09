import homeIcon from "../../../assets/images/free-icon-home-10995497.png";
import addMusic from "../../../assets/images/icon-park-outline_add-music.png";
import libraryIcon from "../../../assets/images/icon-park-outline_folder-music-one.png";
import headphones from "../../../assets/images/feather_headphones.png";
import { Link } from "react-router-dom";
import { Modal } from "../../Modal";
import { useState } from "react";

export function ControlMobileBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dark:bg-[#18181A] bg-[#d3d3d3] flex justify-between w-full h-15 z-0 lg:hidden fixed bottom-0">
      <div className=" flex justify-center items-center  ml-5">
        <Link
          className="flex flex-col text-[10px] justify-center items-center"
          to="/"
        >
          <img src={homeIcon} className="w-6" alt="Home Icon" />
          <p className="dark:text-white text-black">Home</p>
        </Link>
      </div>
      <div className=" flex justify-center items-center ">
        <Link
          className="flex flex-col text-[10px] justify-center items-center"
          to="/Library"
        >
          <img src={libraryIcon} className="w-6" alt="Library Icon" />
          <p className="dark:text-white text-black">Your Library</p>
        </Link>
      </div>
      <Link
        className="flex flex-col text-[10px] justify-center items-center"
        to="/LikedSongs"
      >
        <img src={headphones} className="w-6" alt="Liked songs Icon" />
        <p className="dark:text-white text-black">Liked Songs</p>
      </Link>
      <button onClick={() => setIsModalOpen(true)}>
        <Link
          className="flex flex-col text-[10px] justify-center items-center mr-5"
          to=""
        >
          <img src={addMusic} className="w-6" alt="Create Playlist Icon" />
          <p className="dark:text-white text-black">Create Playlist</p>
        </Link>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className="mt-10 flex flex-col items-center">
              <h1 className="mb-5 text-white text-[25px]">Create Playlist</h1>
              <input
                type="text"
                placeholder="Name"
                className="ml-3 rounded-4xl bg-[#2A2A2A] p-3 pl-6 w-full lg:w-175 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
              />
              <button className="mt-5 text-white pl-10 pr-10 pt-3 pb-3 rounded-2xl bg-[#000000]">
                Create
              </button>
            </div>
          </Modal>
        )}
      </button>
    </div>
  );
}
