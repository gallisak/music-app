import { ControlMobileBar } from "../../components/ControlMobileBar";
import { FriendsBar } from "../../components/FriendsBar";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import cover1 from "../../assets/images/Cover1.png";
import { SongCard } from "../../components/SongCard";
import {
  useGetPodcastDetailsQuery,
  useGetPodcastEpisodeQuery,
} from "../../app/services/musicApi";
import { useParams } from "react-router-dom";

export function PodcastOpen() {
  const { podcastId } = useParams();

  const numericPodcastId = Number(podcastId);

  const {
    error: errorPodcast,
    data: dataPodcast,
    isLoading: isLoadingPodcast,
  } = useGetPodcastDetailsQuery(numericPodcastId, { skip: !numericPodcastId });

  const {
    error: errorEpisode,
    data: dataEpisode,
    isLoading: isLoadingEpisode,
  } = useGetPodcastEpisodeQuery(numericPodcastId, { skip: !numericPodcastId });

  if (errorPodcast) {
    return (
      <span>
        <h1 className="ml-5 font-bold">Upload error</h1>
      </span>
    );
  }

  if (errorEpisode) {
    return (
      <span>
        <h1 className="ml-5 font-bold">Upload error</h1>
      </span>
    );
  }

  if (isLoadingEpisode) {
    return (
      <div className="min-h-100 min-w-100 flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></div>
      </div>
    );
  }

  if (isLoadingPodcast) {
    return (
      <span className="flex items-center text-[25px]">
        <h1 className="w-20 h-20 ml-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></h1>
      </span>
    );
  }

  return (
    <>
      <Header />
      <SideBar />
      <FriendsBar />

      <div className="flex flex-col justify-center items-center mt-20">
        <img src={dataPodcast?.picture_big} className="h-35 w-35 my-3" alt="" />
        <h1 className="text-white text-[20px]">{dataPodcast?.title}</h1>
      </div>

      {dataEpisode?.data?.map((episode) => {
        return (
          <SongCard
            className="h-fit pb-5 pt-5"
            photo={cover1}
            title={episode.title}
            description="Noxygen • CLUB NISSAN"
          />
        );
      })}

      <div>
        <ControlMobileBar />
      </div>
    </>
  );
}
