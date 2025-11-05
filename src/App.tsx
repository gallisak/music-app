import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/Home/Library/LibraryPage";
import { LikedSongsPage } from "./pages/Home/LikedSongs/LikedSongsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Library" element={<LibraryPage />} />
        <Route path="LikedSongs" element={<LikedSongsPage />} />
      </Routes>
    </div>
  );
}

export default App;
