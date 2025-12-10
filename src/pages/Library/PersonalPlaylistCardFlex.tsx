import { useAppSelector } from "../../app/hooks";
import { PersonalPlayListCard } from "./PersonalPlayListCard";

export function PersonalPlayListCardFlex() {
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const user = useAppSelector((state) => state.user.user);

  const myPlaylists = playlists.filter((p) => p.userId === user?.email);

  if (!user) {
    return (
      <div className="flex h-64 items-center justify-center w-full">
        <p className="text-gray-400 text-lg">
          Please log in to view your library.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-25 lg:pt-0 w-full lg:px-0 pb-32">
      <h2 className="text-2xl ml-5   font-bold text-black dark:text-white mb-6">
        Your Playlists
      </h2>

      {myPlaylists.length > 0 ? (
        myPlaylists.map((playlist) => (
          <PersonalPlayListCard key={playlist.id} playlist={playlist} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-10 p-10 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
          <h2 className="text-xl font-bold mb-2">It's quiet here...</h2>
          <p>Create your first playlist in the sidebar to get started!</p>
        </div>
      )}
    </div>
  );
}
