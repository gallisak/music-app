import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../app/features/user/userSlice";
import { ControlMobileBar } from "../../components/Bar/ControlMobileBar";

export function Settings() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.user.theme);

  return (
    <div className="pt-24 pl-0 lg:pl-64 lg:pr-60 pr-4 min-h-screen bg-gray-100 dark:bg-[#18181A] text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl ml-4 font-bold mb-8">Settings</h1>

      <div className="bg-white ml-4 lg:ml-0 dark:bg-[#2A2A2A] p-6 rounded-xl shadow-md max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Appearance</h2>

        <div className="flex items-center justify-between">
          <span className="text-lg">Dark Mode</span>

          <button
            onClick={() => dispatch(toggleTheme())}
            className={`
              w-14 h-8 flex items-center bg-gray-300 dark:bg-green-500 rounded-full p-1 cursor-pointer transition-colors duration-300
            `}
          >
            <div
              className={`
                bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out
                ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
              `}
            ></div>
          </button>
        </div>

        <p className="mt-4 text-sm text-black dark:text-gray-400">
          Current theme: <span className="font-bold capitalize">{theme}</span>
        </p>
      </div>
      <ControlMobileBar />
    </div>
  );
}
