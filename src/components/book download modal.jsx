"use client"
import books from "@/data/books";
export default function BookDownloadModal({ bookId, state, handleModalState }) {
  return (
    <>
      <div
        onClick={() => {
          handleModalState();
        }}
        className={`download-warning-outer-div ${state === true ? "active" : ""}`}
      ></div>
      <div className={`download-warning ${state === true ? "active" : ""}`}>
        <h3>تنبيه</h3>
        <hr />
        <p>هذا الكتاب لمن أراد الانتفاع به ولا يسمح بطباعته للمتاجرة فيه</p>
        <button
          onClick={() => {
            handleModalState(undefined);
            window.open(books[bookId].link);
          }}
          className="download-btn"
        >
          تحميل الكتاب
        </button>
      </div>
    </>
  );
}
