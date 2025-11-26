import { HistoryBar } from "../../components/HistoryBar";
import { Header } from "../../components/Header";
import { PersonalPlayListCardFlex } from "./PersonalPlaylistCardFlex";
import { ControlMobileBar } from "../../components/ControlMobileBar";

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
