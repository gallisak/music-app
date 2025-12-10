import homeIcon from "../../../assets/images/free-icon-home-10995497.png";
import addMusic from "../../../assets/images/icon-park-outline_add-music.png";
import libraryIcon from "../../../assets/images/icon-park-outline_folder-music-one.png";
import headphones from "../../../assets/images/feather_headphones.png";
import { Link } from "react-router-dom";
import { Modal } from "../../Modal";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createPlaylist } from "../../../app/features/playlist/playlistSlice";

export function ControlMobileBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleCreate = () => {
    if (!playlistName.trim()) return alert("Enter a name!");

    if (!user) {
      return alert("Please log in to create playlists!");
    }

    dispatch(createPlaylist({ name: playlistName, userId: user.email }));

    setPlaylistName("");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="dark:bg-[#18181A] bg-[#d3d3d3] flex justify-between w-full h-16 lg:hidden fixed bottom-0 z-50 px-5 border-t border-gray-500 dark:border-gray-800">
        <div className="flex justify-center items-center">
          <Link
            className="flex flex-col text-[10px] justify-center items-center gap-1"
            to="/"
          >
            <img
              src={homeIcon}
              className="w-6 h-6 object-contain"
              alt="Home Icon"
            />
            <p className="dark:text-white text-black font-medium">Home</p>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link
            className="flex flex-col text-[10px] justify-center items-center gap-1"
            to="/Library"
          >
            <img
              src={libraryIcon}
              className="w-6 h-6 object-contain"
              alt="Library Icon"
            />
            <p className="dark:text-white text-black font-medium">Library</p>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link
            className="flex flex-col text-[10px] justify-center items-center gap-1"
            to="/LikedSongs"
          >
            <img
              src={headphones}
              className="w-6 h-6 object-contain"
              alt="Liked songs Icon"
            />
            <p className="dark:text-white text-black font-medium">Liked</p>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col text-[10px] justify-center items-center gap-1"
          >
            <img
              src={addMusic}
              className="w-6 h-6 object-contain"
              alt="Create Playlist Icon"
            />
            <p className="dark:text-white text-black font-medium">Create</p>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="mt-10 flex flex-col items-center px-4 w-full">
            <h1 className="mb-5 text-white text-[25px] font-bold text-center">
              Create Playlist
            </h1>

            <input
              type="text"
              placeholder="Playlist Name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="w-full rounded-full bg-[#2A2A2A] p-4 text-white focus:outline-none border-2 border-transparent focus:border-green-500 transition-all"
            />

            <button
              onClick={handleCreate}
              className="mt-6 text-white w-full py-3 rounded-full bg-green-600 font-bold text-lg active:scale-95 transition-transform"
            >
              Create
            </button>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-400 text-sm py-2"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
