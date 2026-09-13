import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import './styles/colors.css';
import './styles/App.css';

function App() {

  return (
    <>
      <BrowserRouter basename="/Portfolio/">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
