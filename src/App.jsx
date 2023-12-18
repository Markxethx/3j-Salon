import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
