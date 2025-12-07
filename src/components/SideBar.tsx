import headphones from "../assets/images/feather_headphones.png";
import libraryIcon from "../assets/images/icon-park-outline_folder-music-one.png";
import homeIcon from "../assets/images/free-icon-home-10995497.png";
import addMusic from "../assets/images/icon-park-outline_add-music.png";
import PhotoMusic from "../assets/images/Cover Album.png";
import airPlay from "../assets/images/AirPlay.png";
import like from "../assets/images/Active.png";
import emptyLike from "../assets/images/empty-like.png";
import { Link } from "react-router-dom";
import playblack from "../assets/images/playblack.png";
import stopblack from "../assets/images/free-icon-pause-button-3249396.png";
import next from "../assets/images/free-icon-next-724956.png";
import back from "../assets/images/free-icon-back-724956.png";
import { useRef, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { play, pause } from "../app/features/player/playerSlice";
import { Modal } from "./Modal";
import { toggleLike } from "../app/features/library/likedSongsSlice";

export function SideBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentTrack, isPlaying } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { likedTracks } = useAppSelector((state) => state.likedSongs);

  const isLiked = currentTrack
    ? likedTracks.some((track) => track.id === currentTrack.id)
    : false;

  const handleLikeClick = () => {
    if (currentTrack) {
      dispatch(toggleLike(currentTrack));
    }
  };

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.preview;

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name === "AbortError") {
            console.log("Audio play() was aborted by new request.");
          } else {
            console.warn("Autoplay was blocked:", error);
          }
        });
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            if (error.name !== "AbortError") {
              console.warn("Play blocked:", error);
            }
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <aside className="bg-[#333333] fixed z-11 hidden lg:flex  w-50 h-full overflow-y-auto scrollbar-none flex-col top-0">
      <audio className="hidden" ref={audioRef}></audio>
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
            <h1 className="mb-5 text-white text-[25px]">Create Playlist</h1>
            <input
              type="text"
              placeholder="Name"
              className="ml-3 rounded-4xl bg-[#2A2A2A] p-3 pl-6 w-full lg:w-175 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
            />
            <button className="mt-5 text-white pl-10 pr-10 pt-3 pb-3 rounded-2xl bg-[#000000] cursor-pointer hover:bg-[#454545]">
              Create
            </button>
          </div>
        </Modal>
      )}

      <div className="w-41 mt-3 ml-4 border-[#464646] border-b-2 h-2"></div>

      <div className="ml-5 mt-5 text-[#ACACAC]">
        <p className="mb-3 hover:text-[#ffffff]">Your Top Song 2025</p>

        <p className="mb-3 hover:text-[#ffffff]">Cover Hits 2025</p>

        <p className="mb-3 hover:text-[#ffffff]">Anime Hits</p>

        <p className="mb-3 hover:text-[#ffffff]">Best Gaming Music </p>
      </div>

      {currentTrack ? (
        <div className="flex flex-col justify-between items-center text-white">
          <img
            className="w-40 rounded-2xl relative h-40"
            src={currentTrack?.coverUrl}
            alt="photo of the song that is playing now"
          />

          <div className="absolute flex items-center gap-2 left-0 ml-12.5 mt-28 text-black font-bold">
            <button className="bg-white h-6 w-6 border-2 border-black rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={back} alt="back icon" />
            </button>

            <button
              onClick={() => dispatch(isPlaying ? pause() : play())}
              className="bg-white h-9 w-9 border-4 border-green-500 rounded-full flex justify-center items-center cursor-pointer hover:brightness-70"
            >
              {isPlaying ? (
                <img className="h-3 w-3" src={stopblack} alt="play icon" />
              ) : (
                <img className="h-3 w-3" src={playblack} alt="play icon" />
              )}
            </button>

            <button className="bg-white h-6 w-6 border-2 border-black rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={next} alt="back next" />
            </button>
          </div>

          <div className="w-39 mt-3">
            <h1 className="font-bold text-[20px]">{currentTrack?.title}</h1>
            <div className="flex justify-between items-center gap-4">
              <p className="text-[10px]">{currentTrack?.artistName}</p>
              <img className="w-5 h-5" src={airPlay} alt="airPlay icon" />
              <button className="cursor-pointer" onClick={handleLikeClick}>
                <img
                  className="w-5 h-5"
                  src={isLiked ? like : emptyLike}
                  alt="like icon"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between items-center text-white">
          <img
            className="w-40 rounded-2xl relative h-40"
            src={PhotoMusic}
            alt="photo of the song that is playing now"
          />

          <div className="absolute flex items-center gap-2 left-0 ml-12.5 mt-28 text-black font-bold">
            <button className="bg-white h-6 w-6 rounded-full border-2 border-black flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={back} alt="back icon" />
            </button>

            <button className="bg-white h-9 w-9 border-4 border-green-500 rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-3 w-3" src={playblack} alt="play icon" />
            </button>

            <button className="bg-white h-6 w-6 rounded-full flex border-2 border-black justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={next} alt="back next" />
            </button>
          </div>
        </div>
      )}

      <div className="h-8 mt-6 bg-green-400 flex  justify-center items-center">
        <p className="font-bold text-[12px]">
          Now Playing on Samsung S22 Ultra
        </p>
      </div>
    </aside>
  );
}
