import { useState } from "react";
import addMusic from "../../../assets/images/icon-park-outline_add-music.png";
import { Modal } from "../../Modal";
import { useAppDispatch } from "../../../app/hooks";
import { createPlaylist } from "../../../app/features/playlist/playlistSlice";

export function CreatePlaylist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const dispatch = useAppDispatch();

  const handleCreate = () => {
    if (!playlistName.trim()) return alert("Enter a name!");

    dispatch(createPlaylist(playlistName));

    setPlaylistName("");
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex p-3 bg-linear-to-bl gap-3 cursor-pointer text-white from-[#1ED760] to-[#14612F] ml-3 mr-4 mt-3 rounded-4xl hover:brightness-70"
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
              className="ml-3 rounded-4xl bg-[#2A2A2A] p-3 pl-6 w-full lg:w-175 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
            />
            <button
              onClick={handleCreate}
              className="mt-5 text-white pl-10 pr-10 pt-3 pb-3 rounded-2xl bg-[#000000] cursor-pointer hover:bg-[#454545]"
            >
              Create
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
