import PhotoMusic from "../../../assets/images/Cover Album.png";
import airPlay from "../../../assets/images/AirPlay.png";
import like from "../../../assets/images/Active.png";
import emptyLike from "../../../assets/images/empty-like.png";
import playblack from "../../../assets/images/playblack.png";
import stopblack from "../../../assets/images/free-icon-pause-button-3249396.png";
import next from "../../../assets/images/free-icon-next-724956.png";
import back from "../../../assets/images/free-icon-back-724956.png";
import { play, pause } from "../../../app/features/player/playerSlice";
import { formatTime } from "../../../utils/formatTime";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleLike } from "../../../app/features/library/likedSongsSlice";

export function MiniPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const dispatch = useAppDispatch();

  const { currentTrack, isPlaying } = useAppSelector((state) => state.player);
  const { likedTracks } = useAppSelector((state) => state.likedSongs);
  const isPro = useAppSelector((state) => state.user.isPro);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const isLiked = currentTrack
    ? likedTracks.some((track) => track.id === currentTrack.id)
    : false;

  const handleLikeClick = () => {
    if (currentTrack) {
      dispatch(toggleLike(currentTrack));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isPro) {
      alert("Scrubbing is available only for PRO users!");
      return;
    }

    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.preview;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay blocked:", error);
        });
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      <audio
        className="hidden"
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => dispatch(pause())}
      />

      {currentTrack ? (
        <div className="flex flex-col justify-between items-center text-white mt-2 pb-5">
          <img
            className="w-40 rounded-2xl relative h-40"
            src={currentTrack?.coverUrl}
            alt="cover"
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
                <img className="h-3 w-3" src={stopblack} alt="pause icon" />
              ) : (
                <img className="h-3 w-3" src={playblack} alt="play icon" />
              )}
            </button>

            <button className="bg-white h-6 w-6 border-2 border-black rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={next} alt="next icon" />
            </button>
          </div>
          <div className="w-39 mt-3">
            <h1 className="font-bold text-[20px] truncate">
              {currentTrack?.title}
            </h1>

            <div className="w-full flex items-center gap-2 text-[10px] text-gray-400 font-mono mt-1 mb-1">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className={`
                  w-full h-1 rounded-lg appearance-none
                  ${
                    isPro
                      ? "cursor-pointer bg-green-600 accent-green-500"
                      : "cursor-not-allowed bg-gray-600 accent-gray-500"
                  }
                `}
              />
              <span>{formatTime(duration)}</span>
            </div>

            <div className="flex justify-between items-center gap-4">
              <p className="text-[10px] truncate">{currentTrack?.artistName}</p>
              <img className="w-5 h-5" src={airPlay} alt="airPlay icon" />
              <button
                className="cursor-pointer hover:scale-110 transition-transform"
                onClick={handleLikeClick}
              >
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
        <div className="flex flex-col justify-between items-center text-white mt-2 pb-5">
          <img
            className="w-40 rounded-2xl relative h-40"
            src={PhotoMusic}
            alt="cover placeholder"
          />
          <div className="absolute flex items-center gap-2 left-0 ml-12.5 mt-28 text-black font-bold">
            <button className="bg-white h-6 w-6 rounded-full border-2 border-black flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={back} alt="back" />
            </button>
            <button className="bg-white h-9 w-9 border-4 border-green-500 rounded-full flex justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-3 w-3" src={playblack} alt="play" />
            </button>
            <button className="bg-white h-6 w-6 rounded-full flex border-2 border-black justify-center items-center cursor-pointer hover:brightness-70">
              <img className="h-2 w-2" src={next} alt="next" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
