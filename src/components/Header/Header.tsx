import { useAppSelector } from "../../app/hooks";

import { UpgradeButton } from "../UpgradeButton";
import { HeaderAuth } from "./HeaderAuth";

import { HeaderSearch } from "./HeaderSearch";

export function Header() {
  const isPro = useAppSelector((state) => state.user.isPro);

  return (
    <header className="h-20 top-0 w-full fixed z-10 backdrop-blur-lg backdrop-brightness-80 text-white">
      <div className="ml-1 lg:ml-50 mx-auto h-full flex items-center justify-between px-4 gap-2">
        <div className="flex items-center flex-1 min-w-0">
          <div className="hidden lg:flex items-center"></div>

          <HeaderSearch />
        </div>

        <UpgradeButton
          className={`${
            isPro
              ? "cursor-pointer hidden lg:block border-gold-500 dark:text-green-500 text-black mr-5 ml-5 shrink-0"
              : "hidden cursor-pointer lg:flex items-center justify-center rounded-3xl h-12 w-42 dark:bg-[#2A2A2A] bg-[#c1c1c1] border-2 border-green-500 hover:brightness-70 dark:text-white text-black font-bold shrink-0"
          }`}
        >
          {isPro ? "PRO ACCOUNT" : "UPGRADE"}
        </UpgradeButton>

        <div className="relative shrink-0 ml-3">
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
}
