import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";

import "./styles/style.css";
import { useMemo, useState } from "react";
import LocaleContext from "./contexts/LocaleContext";

/**
 * @todos
 * 1. Buatlah fitur ubah bahasa dengan memanfaatkan Context.
 * 2. Pastikan Anda menggunakan fitur Hooks dalam memanfaatkan Context.
 *
 * Catatan:
 *  - Manfaatkan tombol yang berada di pojok kanan navigasi untuk mengubah bahasa.
 *  - Seluruh konten yang ditampilkan diambil dari utils -> content.js
 */

function App() {
  const [locale, setLocale] = useState("id");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  /* nilai value dari LocaleContext.Provider
  akan selalu mengembalikan objek yang identik kecuali nilai locale (salah satu nilai dependencies) berubah.
  */
  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </>
  );
}

export default App;

