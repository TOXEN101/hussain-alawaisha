"use client";
import { useState } from "react";
import Link from "next/link";

export default function Slider({ title, items, pageLink }) {
  const [activeSlide, setActiveSlide] = useState(items.length - 3);
  function prevSlide() {
    let newActive = activeSlide;
    if (newActive == items.length - 3) setActiveSlide(items.length - 1);
    else setActiveSlide(newActive - 1);
  }
  function nextSlide() {
    let newActive = activeSlide;
    if (newActive == items.length - 1) setActiveSlide(items.length - 3);
    else setActiveSlide(newActive + 1);
  }
  console.log(pageLink)
const readSlideBtnTxt= pageLink=="fatawas"?"اقرأ الفتوى":"اقرأ المقال"
  const itemsList = items.slice(-3).map((item) => {
    // console.log(item.id)
    return (
      <div
        key={item.id}
        className={`book-slide ${activeSlide === item.id ? "active" : ""}`}
      >
        <div className="article-detail book-detail">
          <h3>{item.title}</h3>
          <p>{item.brief}</p>
          <Link href={`/${pageLink}/${item.id}`} className="download-btn">
          {
            readSlideBtnTxt
          }
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="book-slider ">
      <h3 className="section-title">{title}</h3>
      <button className="slider-arrow arrow-left" onClick={prevSlide}>
        ❯
      </button>
      {itemsList}
      <button className="slider-arrow arrow-right" onClick={nextSlide}>
        ❮
      </button>
    </div>
  );
}
