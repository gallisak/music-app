import playblack from "../../../assets/images/playblack.png";
import stopblack from "../../../assets/images/free-icon-pause-button-3249396.png";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { play, pause } from "../../../app/features/player/playerSlice";

export function MobileMiniPlayer() {
  const { currentTrack, isPlaying } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="dark:bg-[#18181A] bg-[#d3d3d3] flex justify-between w-full h-15 z-50 lg:hidden fixed bottom-15 left-0 px-4 border-t border-gray-500">
      <div className="flex items-center">
        <img
          src={currentTrack.coverUrl}
          alt="cover"
          className="w-10 h-10 rounded-md"
        />
        <div className="flex flex-col justify-center ml-3">
          <p className="font-bold text-sm text-black dark:text-white truncate w-40">
            {currentTrack.title}
          </p>
          <p className="text-[10px] text-gray-700 dark:text-gray-400">
            {currentTrack.artistName}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => dispatch(isPlaying ? pause() : play())}
          className="bg-white h-9 w-9 border-4 border-green-500 rounded-full flex justify-center items-center cursor-pointer hover:brightness-90"
        >
          {isPlaying ? (
            <img className="h-3 w-3" src={stopblack} alt="pause icon" />
          ) : (
            <img className="h-3 w-3 pl-0.5" src={playblack} alt="play icon" />
          )}
        </button>
      </div>
    </div>
  );
}
