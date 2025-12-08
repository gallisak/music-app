import { HistoryBar } from "../../components/Bar/HistoryBar";
import { Header } from "../../components/Header/Header";
import { PersonalPlayListCardFlex } from "./PersonalPlaylistCardFlex";
import { ControlMobileBar } from "../../components/Bar/ControlMobileBar";

export function LibraryPage() {
  return (
    <>
      <Header />
      <HistoryBar />
      <div className="h-80 ml-0 lg:ml-47 lg:mt-20 flex">
        <PersonalPlayListCardFlex />
      </div>
      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
