import { ControlMobileBar } from "../../components/ControlMobileBar";
import { HistoryBar } from "../../components/HistoryBar";
import { Header } from "../../components/Header";
import { LikedSongsFlex } from "./LikedSongsFlex";

export function LikedSongsPage() {
  return (
    <div>
      <Header />
      <HistoryBar />
      <div className="h-80 ml-0  lg:mt-20 flex">
        <LikedSongsFlex />
      </div>
      <div>
        <ControlMobileBar />
      </div>
    </div>
  );
}
