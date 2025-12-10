import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { SongCard } from "../../components/SongCard";
import { removeTrackFromPlaylist } from "../../app/features/playlist/playlistSlice";
import { MobileMiniPlayer } from "../../components/Bar/MobileBar/MobileMiniPlayer";
import { ControlMobileBar } from "../../components/Bar/MobileBar/ControlMobileBar";

export function PlaylistPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const playlist = useAppSelector((state) =>
    state.playlists.playlists.find((p) => p.id === id)
  );

  if (!playlist) {
    return (
      <div className="pt-24 pl-40 lg:pl-64 text-white text-2xl font-bold flex justify-center items-center h-screen">
        Playlist not found
      </div>
    );
  }

  const playlistCover =
    playlist.tracks.length > 0 ? playlist.tracks[0].coverUrl : null;

  return (
    <div className="pt-24  lg:pl-64 min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300 pb-40">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8 bg-linear-to-b from-gray-300 to-transparent dark:from-[#2A2A2A] p-6 rounded-2xl">
        <div className="w-52 h-52 shadow-2xl rounded-md overflow-hidden flex items-center justify-center bg-gray-400 dark:bg-gray-800 shrink-0">
          {playlistCover ? (
            <img
              src={playlistCover}
              alt="Playlist Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-6xl">🎵</span>
          )}
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm uppercase font-bold text-gray-600 dark:text-gray-300">
            Playlist
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-black dark:text-white mb-2 truncate max-w-lg">
            {playlist.name}
          </h1>
          <p className="text-gray-700 dark:text-gray-400 font-medium">
            {playlist.tracks.length}{" "}
            {playlist.tracks.length === 1 ? "song" : "songs"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 pb-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {playlist.tracks.length > 0 ? (
          playlist.tracks.map((track) => (
            <div key={track.id} className="relative group">
              <SongCard
                track={track}
                title={track.title}
                description={track.artistName}
                photo={track.coverUrl}
                className="w-full"
              />

              <button
                onClick={() =>
                  dispatch(
                    removeTrackFromPlaylist({
                      playlistId: playlist.id,
                      trackId: track.id,
                    })
                  )
                }
                className="absolute top-1 right-1 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                title="Remove from playlist"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center mt-10 text-gray-500 dark:text-gray-400">
            <p className="text-2xl mb-2">It's lonely here...</p>
            <p>Go to the Library or Search and add some tracks!</p>
          </div>
        )}
      </div>
      <div>
        <MobileMiniPlayer />
        <ControlMobileBar />
      </div>
    </div>
  );
}
