import { ControlMobileBar } from "../../components/ControlMobileBar";
import { FriendsBar } from "../../components/FriendsBar";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import cover from "../../assets/images/Cover.png";
import { SongCard } from "../../components/SongCard";

export function PlayListOpen() {
  return (
    <>
      <Header />
      <SideBar />
      <FriendsBar />

      <div className="flex flex-col justify-center items-center mt-20">
        <img src={cover} className="h-35 w-35 my-3" alt="" />
        <h1 className="text-white text-[20px]">Woman of Indonesia</h1>
      </div>

      <SongCard className="ml-50 mt-2" />

      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
