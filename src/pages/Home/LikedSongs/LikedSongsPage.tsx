import { ControlMobileBar } from "../../../components/ControlMobileBar";
import { FriendsBar } from "../../../components/FriendsBar";
import { Header } from "../../../components/Header";
import { SideBar } from "../../../components/SideBar";
import { LikedSongsFlex } from "./LikedSongsFlex";

export function LikedSongsPage() {
  return (
    <div>
      <Header />
      <SideBar />
      <FriendsBar />
      <div className="h-80 ml-0 lg:ml-47 lg:mt-20 flex">
        <LikedSongsFlex />
      </div>
      <div>
        <ControlMobileBar />
      </div>
    </div>
  );
}
