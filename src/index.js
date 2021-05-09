import React from 'react';
import ReactDom from 'react-dom';


import './index.css'

const books =[{
  id:4,
  src:"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  author: 'Pedrao',
  title:'I love you to the moon',
},
{
  id:2,
  src:"https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg",
  author: 'Mark R. Levin',
  title:'American Marxism'
}];
function BookList() {
  return <>
    <section className='mybooks'>
      {books.map((book)=>{
        return <Book key={book.id} {...book}></Book>
      })}
     </section>
    </>  
}
const Book =(props) => {
  // attribute, eventHandler
  // onClick,onMouseOver
  const {src,title, author} = props;
  const Complex= (author)=>{
    alert(author)
  };
  return (
  <article>
  <img src={src} alt="ue"/>
  <h4 className='title'>{title} </h4>
  <p id='autor'> {author}</p>
  <button type='button' onClick={()=> alert(title)}>Click here for an alert</button>
  <button type='button' onClick={()=>(Complex(author))}>complex stuff</button>
  </article>
  )
} 

ReactDom.render(<BookList/>,document.getElementById('root'))