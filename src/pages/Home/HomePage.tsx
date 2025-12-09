import { ControlMobileBar } from "../../components/Bar/MobileBar/ControlMobileBar";
import { HistoryBar } from "../../components/Bar/HistoryBar";
import { Header } from "../../components/Header/Header";
import { PlayListCardGrid } from "./PlayList/PlayListCardFlex";
import { ArtistCardFlex } from "./Artist/ArtistCardFlex";
import { MobileMiniPlayer } from "../../components/Bar/MobileBar/MobileMiniPlayer";

export function HomePage() {
  return (
    <>
      <Header />
      <HistoryBar />
      <h1 className="mb-5 mt-25 ml-5 lg:ml-54 text-white text-[34px]">
        Hot Today
      </h1>

      <div className="h-80 ml-0 lg:ml-50  flex">
        <PlayListCardGrid />
      </div>

      <h1 className="mb-5 mt-5 ml-5 lg:ml-54 text-white text-[34px]">
        Top artists
      </h1>

      <div className="h-41 ml-0 lg:ml-50 mb-10 flex">
        <ArtistCardFlex />
      </div>

      <div className="mt-20">
        <MobileMiniPlayer />
        <ControlMobileBar />
      </div>
    </>
  );
}
