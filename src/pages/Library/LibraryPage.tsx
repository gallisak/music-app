import { HistoryBar } from "../../components/Bar/HistoryBar";
import { Header } from "../../components/Header/Header";
import { PersonalPlayListCardFlex } from "./PersonalPlaylistCardFlex";
import { ControlMobileBar } from "../../components/Bar/MobileBar/ControlMobileBar";
import { MobileMiniPlayer } from "../../components/Bar/MobileBar/MobileMiniPlayer";

export function LibraryPage() {
  return (
    <>
      <Header />
      <HistoryBar />

      <div className="ml-0 lg:ml-47 lg:mt-20 flex min-h-screen">
        <PersonalPlayListCardFlex />
      </div>

      <div>
        <MobileMiniPlayer />
        <ControlMobileBar />
      </div>
    </>
  );
}
