import { FriendsBar } from "../../../components/FriendsBar";
import { Header } from "../../../components/Header";
import { SideBar } from "../../../components/SideBar";
import { PersonalPlayListCardFlex } from "./PersonalPlaylistCardFlex";

export function LibraryPage() {
  return (
    <>
      <Header />
      <SideBar />
      <FriendsBar />
      <div className="h-80 ml-0 lg:ml-47 lg:mt-20 flex">
        <PersonalPlayListCardFlex />
      </div>
    </>
  );
}
