import React from 'react'
import AllTheBooks from '../AllTheBooks/AllTheBooks'
import MyNav from '../MyNav/MyNav'
import MyFooter from '../MyFooter/MyFooter'
import { useState, useEffect } from 'react'

export default function Home({books}) {
    
    const [booklist, setBookList] = useState([]);

    useEffect(() => {
        setBookList(books);
      }, []);

    function searchBook(title) {
        const filteredBooks = booklist.filter((el) =>
          el.title.toLowerCase().includes(title.toLowerCase())
        );
        setBookList(filteredBooks);
      }
    
      function clearSearch() {
        setBookList(books);
      }


  return (
    <>
    <MyNav onSearchBook={searchBook} onClearSearch={clearSearch} onHome={true}/>
    <AllTheBooks books={booklist}/>
    <MyFooter/>
    </>
  )
}
