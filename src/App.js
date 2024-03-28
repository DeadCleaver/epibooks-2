import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import horror from "./data/horror.json";
import MyNav from "./components/MyNav/MyNav";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks";
import MyFooter from "./components/MyFooter/MyFooter";
import { useEffect, useState } from "react";
import ThemeProvider from "./contex/Theme/Theme";
import LatestReleaseProvider from "./contex/LatestRelease/LatestRelease";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import BookDetails from "./components/BookDetails/BookDetails";
import Home from "./components/Home/Home";

/* COSE MANCANTI:
- Spinner di caricamento negli oggetti (ora è su comment area, che è l'unica che fa la fetch)
- Messaggi d'errore */

function App() {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(horror);
  }, []);

  return (
    <>
      <main>
        <LatestReleaseProvider>
          <ThemeProvider>
            {/* <MyNav onSearchBook={searchBook} onClearSearch={clearSearch} onHome={onHome} /> */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home books={bookList} />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/details/:asin" element={<BookDetails books={bookList}/>}/>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </LatestReleaseProvider>
      </main>
    </>
  );
}

export default App;
