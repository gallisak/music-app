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
  track: AlbumTracks;
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
    <>
      <div className="lg:mr-100">
        <div
          className={`h-15 border-b-2 flex group relative ${className} bg-[#232323] overflow-hidden hover:brightness-70`}
        >
          <div className="h-full ml-5 flex justify-start items-center">
            <div className="relative h-10 w-10 shrink-0">
              <img
                src={photo}
                className="h-full w-full rounded-md"
                alt="photo of the song"
              />

              <div
                onClick={handlePlayClick}
                className={`absolute inset-0 
                  flex items-center justify-center 
                  bg-black bg-opacity-40 
                  rounded-md
                  opacity-0 
                  group-hover:opacity-100 
                  cursor-pointer `}
              >
                <img src={play} className="h-6 w-6" alt="play icon" />
              </div>
            </div>
          </div>

          <div className=" relative z-0 flex flex-col min-w-0 justify-center">
            <h1 className="text-white text-[18px] truncate ml-6">{title}</h1>
            <p className="text-gray-400 ml-6 mr-6 truncate text-[12px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
