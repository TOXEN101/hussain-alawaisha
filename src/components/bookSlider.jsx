"use client";
import { useState } from "react";
import books from "@/data/books";
import BookDownloadModal from "./book download modal";

export default function BookSlider() {
  const [activeBook, setActiveBook] = useState(books.length - 5);
  function prevBook() {
    let newActive = activeBook;
    if (newActive == books.length - 5) setActiveBook(books.length - 1);
    else setActiveBook(newActive - 1);
  }
  function nextBook() {
    let newActive = activeBook;
    if (newActive == books.length - 1) setActiveBook(books.length - 5);
    else setActiveBook(newActive + 1);
  }
  const [downloadModalState,setDownloadModalState]= useState(false)
  function handleModalState(){
    setDownloadModalState(!downloadModalState)
  }
  // setInterval(nextBook,3000)
  const booksList = books.slice(-5).map((book) => {
    return (
      <div
        className={`book-slide ${activeBook == book.id ? "active" : ""} `}
        key={book.id}
      >
        <img src={book.img} />
        <div className="book-details">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <button onClick={()=>{handleModalState()}} className="download-btn">
            تحميل الكتاب
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="book-slider">
        <h3 className="section-title">أحدث الكتب</h3>
        <button className="slider-arrow arrow-left" onClick={prevBook}>
          ❯
        </button>
        {booksList}
        <button className="slider-arrow arrow-right" onClick={nextBook}>
          ❮
        </button>
      </div>
      <BookDownloadModal bookId={activeBook} state={downloadModalState} handleModalState={handleModalState} />
    </>
  );
}
