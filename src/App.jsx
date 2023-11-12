import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import PagesPage from "../pages/PagesPage";
import BookPage from "../pages/BookPage";
import ContactPage from "../pages/ContactPage";

function App() {
  return (
    <div className="text-zinc-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="page" element={<PagesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="book" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
