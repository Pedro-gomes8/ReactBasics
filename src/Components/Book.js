import React from 'react'

const Book =(props) => {
  // attribute, eventHandler
  // onClick,onMouseOver
  const {src,title, author} = props;
  const Complex= (author)=>{
    alert(author)
  };
  return (
  <article onMouseOver={()=> console.log(title)}>
  <img src={src} alt="ue"/>
  <h4 className='title'>{title} </h4>
  <p id='autor'> {author}</p>
  <button type='button' onClick={()=> alert(title)}>Click here for an alert</button>
  <button type='button' onClick={()=>(Complex(author))}>complex stuff</button>
  </article>
  )
} 

export default Book
