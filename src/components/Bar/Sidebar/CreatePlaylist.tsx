import { useState } from "react";
import addMusic from "../../../assets/images/icon-park-outline_add-music.png";
import { Modal } from "../../Modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createPlaylist } from "../../../app/features/playlist/playlistSlice";

export function CreatePlaylist() {
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
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex p-3 bg-linear-to-bl gap-3 cursor-pointer text-white from-[#1ED760] to-[#14612F] ml-3 mr-4 mt-3 rounded-full hover:brightness-75 transition-all"
      >
        <img src={addMusic} alt="Create Playlist Icon" />
        Create Playlist
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="mb-5 text-white text-[25px]">Create Playlist</h1>
            <input
              type="text"
              placeholder="Name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="ml-3 rounded-full bg-[#2A2A2A] p-3 pl-6 w-full lg:w-96 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
            />
            <button
              onClick={handleCreate}
              className="mt-5 text-white px-10 py-3 rounded-2xl bg-black cursor-pointer hover:bg-gray-800 transition-colors"
            >
              Create
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
