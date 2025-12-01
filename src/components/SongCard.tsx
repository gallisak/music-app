import play from "../assets/images/play.png";
import { type AlbumTracks } from "../app/services/musicApi";
import { useAppDispatch } from "../app/hooks";
import {
  setCurrentTrack,
  type ActiveTrack,
} from "../app/features/player/playerSlice";

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

  const handlePlayClick = () => {
    const activeTrackData: ActiveTrack = {
      id: track.id,
      title: title,
      preview: track.preview,
      artistName: description,
      coverUrl: photo || "",
    };
    dispatch(setCurrentTrack(activeTrackData));
  };

  return (
    <div
      className={`
        h-15 flex group relative 
        bg-[#232323] overflow-hidden 
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

      <div className="relative z-0 flex flex-col min-w-0 justify-center w-full">
        <h1 className="text-white text-[16px] truncate ml-4 pr-2">{title}</h1>
        <p className="text-gray-400 ml-4 pr-2 truncate text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
}
