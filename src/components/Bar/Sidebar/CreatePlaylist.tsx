import { useState } from "react";
import addMusic from "../../../assets/images/icon-park-outline_add-music.png";
import { Modal } from "../../Modal";

export function CreatePlaylist() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex p-3 bg-linear-to-bl gap-3 cursor-pointer text-white from-[#1ED760] to-[#14612F] ml-3 mr-4 mt3 rounded-4xl hover:brightness-70"
      >
        <img className="" src={addMusic} alt="Create Playlist Icon" />
        Create Playlist
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="mb-5 dark:text-white text-black text-[25px]">
              Create Playlist
            </h1>
            <input
              type="text"
              placeholder="Name"
              className="ml-3 rounded-4xl dark:bg-[#2A2A2A] bg-[#dddddd] p-3 pl-6 w-full lg:w-175 focus:outline-none border-[#18181A] border-2 focus:border-green-500 dark:text-white text-black"
            />
            <button className="mt-5 text-white pl-10 pr-10 pt-3 pb-3 rounded-2xl bg-[#000000] cursor-pointer hover:bg-[#454545]">
              Create
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
