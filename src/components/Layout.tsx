import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { HistoryBar } from "./HistoryBar";

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
