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

/* COSE MANCANTI:
- Spinner di caricamento negli oggetti (ora è su comment area, che è l'unica che fa la fetch)
- Messaggi d'errore */

function App() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(horror);
  }, []);

  function searchBook(title) {
    const filteredBooks = bookList.filter((el) =>
      el.title.toLowerCase().includes(title.toLowerCase())
    );
    setBookList(filteredBooks);
  }

  function clearSearch() {
    setBookList(horror);
  }

  return (
    <>
      <main>
        <LatestReleaseProvider>
          <ThemeProvider>
            <MyNav onSearchBook={searchBook} onClearSearch={clearSearch} />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AllTheBooks books={bookList} />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/details/:asin" element={<BookDetails books={bookList}/>}/>
              </Routes>
            </BrowserRouter>
            <MyFooter />
          </ThemeProvider>
        </LatestReleaseProvider>
      </main>
    </>
  );
}

export default App;
