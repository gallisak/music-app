import { SongCard } from "../../../components/SongCard";
import cover from "../../../assets/images/Cover.png";

export function LikedSongsCard() {
  return (
    <SongCard
      className=" lg:ml-50 w-full"
      photo={cover}
      title="Long live Virtual Indonesia"
      description="Noxygen • CLUB NISSAN"
    />
  );
}
