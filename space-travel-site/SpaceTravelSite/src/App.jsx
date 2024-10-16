import "./styles/index.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { DestinationPage } from "./pages/DestinationPage";
import { CrewPage } from "./pages/CrewPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/crew" element={<CrewPage />}></Route>
      <Route path="/technology" element={<TechnologyPage />}></Route>
      <Route path="/destination" element={<DestinationPage />}></Route>
    </Routes>
  );
}

export default App;
