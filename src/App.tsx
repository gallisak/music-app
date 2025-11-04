import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/Home/Library/LibraryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Library" element={<LibraryPage />} />
      </Routes>
    </div>
  );
}

export default App;
