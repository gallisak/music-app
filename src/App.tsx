import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/Library/LibraryPage";
import { LikedSongsPage } from "./pages/LikedSongs/LikedSongsPage";
import { PlayListOpen } from "./pages/Home/PlayList/PlayListOpen";
import { ArtistCardOpen } from "./pages/Home/Artist/ArtistCardOpen";
import { Page404 } from "./pages/404/Page404";
import { Layout } from "./components/Layout";
import { SearchPage } from "./pages/Search/SearchPage";
import { Settings } from "./pages/Settings/Settings";
import { useEffect } from "react";
import { useAppSelector } from "./app/hooks";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { PlaylistPage } from "./pages/Library/PlaylistPage";

function App() {
  const theme = useAppSelector((state) => state.user.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Library" element={<LibraryPage />} />
          <Route path="/LikedSongs" element={<LikedSongsPage />} />
          <Route path="/album/:albumId" element={<PlayListOpen />} />
          <Route path="/Artist/:artistId" element={<ArtistCardOpen />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
