import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import ResumePage from "./pages/ResumePage";
import WebDesignPage from "./pages/WebDesignPage";
import BannerDesignPage from "./pages/BannerDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/webdesign" element={<WebDesignPage />} />
        <Route path="/bannerdesign" element={<BannerDesignPage />} />
        <Route path="/graphicdesign" element={<GraphicDesignPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
