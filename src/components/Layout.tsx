import { Outlet } from "react-router-dom";
import { SideBar } from "./Bar/Sidebar/SideBar";
import { Header } from "./Header/Header";
import { HistoryBar } from "./Bar/HistoryBar";

export function Layout() {
  return (
    <div className="app-container">
      <SideBar />
      <Header />
      <HistoryBar />

      <main className="z-11">
        <Outlet />
      </main>
    </div>
  );
}
