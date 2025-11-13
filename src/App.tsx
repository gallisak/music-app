import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/Library/LibraryPage";
import { LikedSongsPage } from "./pages/LikedSongs/LikedSongsPage";
import { PlayListOpen } from "./pages/Home/PlayListOpen";
import { ArtistCardOpen } from "./pages/Home/ArtistCardOpen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Library" element={<LibraryPage />} />
        <Route path="/LikedSongs" element={<LikedSongsPage />} />
        <Route path="/PlayList/:albumId" element={<PlayListOpen />} />
        <Route path="/Artist/:artistId" element={<ArtistCardOpen />} />
      </Routes>
    </>
  );
}

export default App;
