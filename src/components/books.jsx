"use client"
import { useState } from "react";
import books from "@/data/books";
import BookDownloadModal from "./book download modal";
export default function Books() {
const [downloadModalState, setDownloadModalState] = useState({ bookId:0,status:false});
function handleModalState(bookId) {
    if(bookId ===undefined)
  setDownloadModalState({...downloadModalState,status:!downloadModalState.status});
else{
    setDownloadModalState({bookId:bookId,status:!downloadModalState.status});

}
}
  const booksList = books.map((book) => {
    
    return (
      <div key={book.id} className="book-card">
        <img src={book.img} alt="غلاف الكتاب" />
        <div className="book-info">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <button
            onClick={()=>{handleModalState(book.id)}}
            className="download-btn"
            
          >
            تحميل الكتاب
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
    
      <div className="books-grid">{booksList}</div>
    <BookDownloadModal bookId={downloadModalState.bookId} state={downloadModalState.status} handleModalState={handleModalState} />
    </>
  );
}
