import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/Library/LibraryPage";
import { LikedSongsPage } from "./pages/LikedSongs/LikedSongsPage";
import { PlayListOpen } from "./pages/Home/PlayListOpen";
import { ArtistCardOpen } from "./pages/Home/ArtistCardOpen";
import { Page404 } from "./pages/404/Page404";
import { Layout } from "./components/Layout";
import { SearchPage } from "./pages/Search/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Library" element={<LibraryPage />} />
          <Route path="/LikedSongs" element={<LikedSongsPage />} />
          <Route path="/PlayList/:albumId" element={<PlayListOpen />} />
          <Route path="/Artist/:artistId" element={<ArtistCardOpen />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
