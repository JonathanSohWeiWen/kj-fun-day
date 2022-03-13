import React from "react";
import { Routes, Route } from "react-router-dom";
import GameDetails from "./gameDetails";
import GameList from "./GameList";
import Main from "./main";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Main />} />
      <Route path="/" element={<GameList />} />
      <Route path="/gameDetails/:gameName" element={<GameDetails />} />
    </Routes>
  );
}

export default App;
