import { useAppSelector } from "../../app/hooks";
import { PersonalPlayListCard } from "./PersonalPlayListCard";

export function PersonalPlayListCardFlex() {
  const playlists = useAppSelector((state) => state.playlists.playlists);

  return (
    <div className="flex pl-0 pr-0 flex-col mt-20 lg:mt-0 w-full px-4 lg:px-0 pb-32">
      {playlists.length > 0 ? (
        playlists.map((playlist) => (
          <PersonalPlayListCard key={playlist.id} playlist={playlist} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <h2 className="text-xl font-bold mb-2">Your library is empty</h2>
          <p>Create your first playlist in the sidebar!</p>
        </div>
      )}
    </div>
  );
}
