import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <HomePage />
    </div>
  );
}

export default App;
