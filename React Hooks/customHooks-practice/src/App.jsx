import React from "react";

import MoviesList from "./components/MovieList";
import MoviesGrid from "./components/MovieGrid";

/**
 * @notes
 * Aplikasi sudah berjalan dengan baik, tetapi masih terdapat
 * duplikasi logika dalam menampilkan data film
 * di komponen MoviesList dan MoviesGrid
 *
 * @todos
 * Hapus duplikasi logika pada komponen MoviesList dan MoviesGrid
 * dengan membuat custom hooks.
 */

function App() {
  const [mode, setMode] = React.useState("list");

  const modeChangeHandler = (event) => {
    setMode(event.target.value);
  };

  return (
    <main>
      <select onChange={modeChangeHandler}>
        <option value="list">List Mode</option>
        <option value="grid">Grid Mode</option>
      </select>

      {mode === "list" ? <MoviesList /> : <MoviesGrid />}
    </main>
  );
}

export default App;

