import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { FriendsBar } from "./FriendsBar";

export function Layout() {
  return (
    <div className="app-container">
      <SideBar />
      <Header />
      <FriendsBar />

      <main className="z-11">
        <Outlet />
      </main>
    </div>
  );
}
