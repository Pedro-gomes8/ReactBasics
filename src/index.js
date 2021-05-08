import React from 'react';
import ReactDom from 'react-dom';


import './index.css'

const firstBook = {
  src:"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  author: 'Pedrao',
  title:'I love you to the moon',
}
const secondBook = {
  src:"https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg",
  author: 'Mark R. Levin',
  title:'American Marxism'
}
function BookList() {
  return <>
    <section className='mybooks'>
      <Book src={firstBook.src} author={firstBook.author} title={firstBook.title}/>
      <Book src={secondBook.src} author={secondBook.author} title={secondBook.title}/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
     </section>
    </>  
}
const Book =(props) => {
  const {src,title, author} = props;
  return (
  <article>
  <img src={src} alt="ue"/>
  <h4 className='title'>{title} </h4>
  <p id='autor'> {author}</p>
  </article>
  )
} 

ReactDom.render(<BookList/>,document.getElementById('root'))