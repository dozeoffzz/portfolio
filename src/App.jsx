import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import ResumePage from "./pages/ResumePage";
import WebDesignPage from "./pages/WebDesignPage";
import BannerDesignPage from "./pages/BannerDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import ContactPage from "./pages/ContactPage";
import { TimerContext } from "./components/TimerContext";

export default function App() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const diff = Math.floor((Date.now() - startTime) / 1000);
      setElapsedSeconds(diff);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <TimerContext.Provider value={elapsedSeconds}>
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
    </TimerContext.Provider>
  );
}
