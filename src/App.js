import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import horror from "./data/horror.json";
import scifi from "./data/scifi.json";
import history from "./data/history.json"
import romance from "./data/romance.json"
import fantasy from "./data/fantasy.json"
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

  const [bookList, setBookList] = useState(fantasy);
  const [genre, setGenre] = useState("Fantasy")

/*   useEffect(() => {
    setBookList(history);
  }, []); */

  const changeGenre = (genre) => {
    setGenre(`${genre}`)
    switch (genre) {
      case "horror":
        setBookList(horror);
        break;
      case "scifi":
        setBookList(scifi);
        break;
      case "history":
        setBookList(history);
        break;
      case "romance":
        setBookList(romance);
        break;
      case "fantasy":
        setBookList(fantasy);
        break;
      default:
        setBookList([]);
        break;
    }
  };


  return (
    <>
      <main>
        <LatestReleaseProvider>
          <ThemeProvider>
            {/* <MyNav onSearchBook={searchBook} onClearSearch={clearSearch} onHome={onHome} /> */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home books={bookList} changeGenre={changeGenre} selectedGenre={genre}/>} />
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
