import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/Home/Library/LibraryPage";
import { LikedSongsPage } from "./pages/Home/LikedSongs/LikedSongsPage";
import { PlayListOpen } from "./pages/Home/PlayListOpen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Library" element={<LibraryPage />} />
        <Route path="/LikedSongs" element={<LikedSongsPage />} />
        <Route path="/PlayList" element={<PlayListOpen />}></Route>
      </Routes>
    </>
  );
}

export default App;
