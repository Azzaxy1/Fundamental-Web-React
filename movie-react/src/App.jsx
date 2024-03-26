// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";
import NowPlayingPage from "./Pages/NowPlayingPage";
import UpcomingPage from "./Pages/UpcomingPage";
import SearchPage from "./Pages/SearchPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

