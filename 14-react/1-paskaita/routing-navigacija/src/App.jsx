import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Contactspage from "./pages/ContantsPage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contants" element={<Contactspage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
