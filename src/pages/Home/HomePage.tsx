import { ControlMobileBar } from "../../components/ControlMobileBar";
import { FriendsBar } from "../../components/FriendsBar";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { PlayListCardGrid } from "./PlayListCardFlex";
import { PodcastCardGrig } from "./PodcastCardFlex";

export function HomePage() {
  return (
    <>
      <Header />
      <SideBar />
      <FriendsBar />
      <h1 className="mb-5 mt-5 ml-5 lg:ml-54 text-white text-[34px]">
        Hot Today
      </h1>

      <div className="h-80 ml-0 lg:ml-50 flex">
        <PlayListCardGrid />
      </div>

      <h1 className="mb-5 mt-5 ml-5 lg:ml-54 text-white text-[34px]">
        Enjoy Your Day
      </h1>

      <div className="h-41 ml-0 lg:ml-50 flex">
        <PodcastCardGrig />
      </div>

      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
