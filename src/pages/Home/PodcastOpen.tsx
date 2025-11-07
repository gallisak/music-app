import { ControlMobileBar } from "../../components/ControlMobileBar";
import { FriendsBar } from "../../components/FriendsBar";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import cover1 from "../../assets/images/Cover1.png";
import { SongCard } from "../../components/SongCard";

export function PodcastOpen() {
  return (
    <>
      <Header />
      <SideBar />
      <FriendsBar />

      <div className="flex flex-col justify-center items-center mt-20">
        <img src={cover1} className="h-35 w-35 my-3" alt="" />
        <h1 className="text-white text-[20px]">Long live Virtual Indonesia</h1>
      </div>

      <SongCard
        className="ml-50 mt-2"
        photo={cover1}
        title="Long live Virtual Indonesia"
        description="Noxygen • CLUB NISSAN"
      />

      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
