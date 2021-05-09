import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// importing data from "database"
import {books} from './books'

//importing Component
import Book from './Components/Book';
// importing Component
function BookList() {
  return <>
    <section className='mybooks'>
      {books.map((book)=>{
        return <Book key={book.id} {...book}></Book>
      })}
     </section>
    </>  
};
ReactDom.render(<BookList/>,document.getElementById('root'));