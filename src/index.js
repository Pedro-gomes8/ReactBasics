import React from 'react';
import ReactDom from 'react-dom';


import './index.css'
// Nested Components
function BookList() {
  return <>
    <section className='mybooks'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
     </section>
    </>  
}
const Book =() => {
  return <article>
    <Image/>
    <Name/>
    <Author/>
  </article>
}
const Image =() => <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="ue"/>

const Name = () =>{
  return <h4 className='title'>I love you to the moon and back </h4>
}

const Author =() => {
  return <p id='autor'> Pedro Gomes</p>
}

ReactDom.render(<BookList/>,document.getElementById('root'))