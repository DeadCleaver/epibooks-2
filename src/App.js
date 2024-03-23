import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import scifi from "./data/scifi.json";
import MyNav from "./components/MyNav/MyNav";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks";
import MyFooter from "./components/MyFooter/MyFooter";
import Wellcome from "./components/Wellcome/Wellcome";
import { useEffect, useState } from "react";
import ThemeProvider from "./contex/Theme/Theme";
import LatestReleaseProvider from "./contex/LatestRelease/LatestRelease";

function App() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(scifi);
  }, []);

  function searchBook(title) {
    const filteredBooks = bookList.filter((el) =>
      el.title.toLowerCase().includes(title.toLowerCase())
    );
    setBookList(filteredBooks);
  }

  function clearSearch() {
    setBookList(scifi);
  }

  return (
    <>
      <main>
        <LatestReleaseProvider>
          <ThemeProvider>
            <MyNav
              onSearchBook={searchBook}
              onClearSearch={clearSearch}
            ></MyNav>
            <Wellcome></Wellcome>
            <AllTheBooks books={bookList}></AllTheBooks>
            <MyFooter></MyFooter>
          </ThemeProvider>
        </LatestReleaseProvider>
      </main>
    </>
  );
}

export default App;
