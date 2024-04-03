import React from 'react'
import AllTheBooks from '../AllTheBooks/AllTheBooks'
import MyNav from '../MyNav/MyNav'
import MyFooter from '../MyFooter/MyFooter'
import { useState, useEffect } from 'react'
import Wellcome from "../Wellcome/Wellcome";
import { Stack } from 'react-bootstrap'

export default function Home({books, selectedGenre, changeGenre}) {
    
    const [booklist, setBookList] = useState([]);

    useEffect(() => {
        setBookList(books);
      }, [books]);

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
    <Wellcome changeGenre={changeGenre}/> 
    <Stack className='text-center mb-3'><h5>{selectedGenre ? `${selectedGenre.toUpperCase()}` : `FANTASY`}</h5></Stack>
    <AllTheBooks books={booklist}/>
    <MyFooter/>
    </>
  )
}
