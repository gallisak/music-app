import play from "../assets/images/play.png";
import { type AlbumTracks } from "../app/services/musicApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setCurrentTrack,
  type ActiveTrack,
} from "../app/features/player/playerSlice";
import { addTrackToPlaylist } from "../app/features/playlist/playlistSlice";
import { Modal } from "./Modal";
import { useState } from "react";

interface SongCardProps {
  photo: string | undefined;
  title: string;
  description: string;
  className?: string;
  track: AlbumTracks | ActiveTrack;
}

export function SongCard({
  photo,
  title,
  description,
  className,
  track,
}: SongCardProps) {
  const dispatch = useAppDispatch();

  const playlists = useAppSelector((state) => state.playlists.playlists);
  const user = useAppSelector((state) => state.user.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const myPlaylists = playlists.filter((p) => p.userId === user?.email);

  const activeTrackData: ActiveTrack = {
    id: track.id,
    title: title,
    preview: track.preview,
    artistName: description,
    coverUrl: photo || "",
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(setCurrentTrack(activeTrackData));
  };

  const addToPlaylist = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!user) {
      return alert("Please log in to add songs to playlist!");
    }
    setIsModalOpen(true);
  };

  const handleSelectPlaylist = (playlistId: string) => {
    dispatch(addTrackToPlaylist({ playlistId, track: activeTrackData }));
    setIsModalOpen(false);
  };

  return (
    <div
      className={`
        h-15 flex group relative 
        dark:bg-[#222] bg-[#b0b0b0] overflow-hidden 
        hover:brightness-70
        ${className || ""} 
      `}
    >
      <div className="h-full ml-5 flex justify-start items-center">
        <div className="relative h-10 w-10 shrink-0">
          <img
            src={photo}
            className="h-full w-full rounded-md object-cover"
            alt=""
          />
          <div
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <img src={play} className="h-5 w-5" alt="play icon" />
          </div>
        </div>
      </div>

      <div className="relative z-0 flex flex-col min-w-0 justify-center w-full px-4">
        <h1 className="text-[16px] dark:text-white text-black truncate pr-2">
          {title}
        </h1>
        <p className="dark:text-white text-black pr-2 truncate text-[12px]">
          {description}
        </p>
      </div>

      <div
        onClick={addToPlaylist}
        className="flex items-end justify-center pr-4 pl-3 cursor-pointer text-white hover:text-green-500 font-bold h-full"
      >
        <span className="text-2xl pb-1">+</span>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="mt-8 w-full max-w-sm mx-auto px-4">
            <h2 className="text-xl font-bold text-white text-center mb-6">
              Add to Playlist
            </h2>

            <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto scrollbar-none">
              {myPlaylists.length > 0 ? (
                myPlaylists.map((playlist) => (
                  <button
                    key={playlist.id}
                    onClick={() => handleSelectPlaylist(playlist.id)}
                    className="w-full cursor-pointer text-left px-5 py-3 rounded-xl bg-[#2A2A2A] hover:bg-[#3d3d3d] text-white transition-colors flex justify-between items-center group"
                  >
                    <span className="font-medium truncate">
                      {playlist.name}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-green-400">
                      {playlist.tracks.length} songs
                    </span>
                  </button>
                ))
              ) : (
                <div className="text-center text-gray-400 py-4">
                  <p className="mb-2">No playlists found.</p>
                  <p className="text-sm">Create one in the sidebar first!</p>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 cursor-pointer w-full py-2 text-sm text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
