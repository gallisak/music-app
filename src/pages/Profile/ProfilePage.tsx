import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  logOut,
  upgradeToPro,
  downgradeToFree,
} from "../../app/features/user/userSlice";
import { Link } from "react-router-dom";
import { MobileMiniPlayer } from "../../components/Bar/MobileBar/MobileMiniPlayer";
import { ControlMobileBar } from "../../components/Bar/MobileBar/ControlMobileBar";

export function ProfilePage() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const isPro = useAppSelector((state) => state.user.isPro);
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const likedTracksCount = useAppSelector(
    (state) => state.likedSongs.likedTracks.length
  );

  const myPlaylistsCount = playlists.filter(
    (p) => p.userId === user?.email
  ).length;

  const getInitials = (name: string) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "U";
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-[#121212] text-black dark:text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">You are not logged in</h1>
          <Link to="/" className="text-green-500 hover:underline">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300 pt-25 lg:pl-60 lg:pr-60 pb-10 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div
            className={`
            w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold shadow-xl
            ${
              isPro
                ? "bg-linear-to-tr from-yellow-400 via-orange-500 to-red-500 text-white"
                : "bg-gray-300 dark:bg-[#333] text-gray-600 dark:text-gray-300"
            }
          `}
          >
            {getInitials(user.name)}
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              Profile
            </p>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {user.name}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {isPro && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-black border border-gray-300">
                  PRO MEMBER
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-200 dark:bg-[#2A2A2A]">
                {user.email}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-white dark:bg-[#18181A] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#2A2A2A] hover:border-green-500 transition-colors cursor-default">
            <h3 className="text-gray-500 dark:text-gray-400 font-medium mb-1">
              Liked Songs
            </h3>
            <p className="text-3xl font-bold text-green-500">
              {likedTracksCount}
            </p>
          </div>
          <div className="bg-white dark:bg-[#18181A] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#2A2A2A] hover:border-green-500 transition-colors cursor-default">
            <h3 className="text-gray-500 dark:text-gray-400 font-medium mb-1">
              Playlists Created
            </h3>
            <p className="text-3xl font-bold text-green-500">
              {myPlaylistsCount}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#18181A] rounded-2xl p-8 mb-10 border border-gray-200 dark:border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Current Plan</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                {isPro
                  ? "You are enjoying the full experience with high-quality audio, scrubbing, and zero ads."
                  : "You are on the free plan. Upgrade to unlock scrubbing and premium features."}
              </p>
            </div>

            {isPro ? (
              <button
                onClick={() => dispatch(downgradeToFree())}
                className="whitespace-nowrap cursor-pointer px-6 py-3 rounded-full border-2 border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Cancel Premium
              </button>
            ) : (
              <button
                onClick={() => dispatch(upgradeToPro())}
                className="whitespace-nowrap px-8 py-3 rounded-full bg-green-500 text-black font-bold hover:scale-105 hover:bg-green-400 shadow-lg shadow-green-500/20 transition-all duration-300"
              >
                Get PRO for $9.99
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => dispatch(logOut())}
            className="flex cursor-pointer items-center gap-2 text-gray-500 hover:text-red-500 transition-colors font-bold px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            Log Out
          </button>
        </div>
      </div>
      <div className="pb-30">
        <MobileMiniPlayer />
        <ControlMobileBar />
      </div>
    </div>
  );
}
