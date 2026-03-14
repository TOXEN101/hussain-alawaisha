import styles from "./page.module.css";
import books from "@/data/books";
import articles from "@/data/articles";
import fatawas from "@/data/fatawas";
// ***components*** 
import Image from "next/image";
import BookSlider from "@/components/bookSlider";
import Slider from "@/components/articles and fatawa slider";
export default function Home() {
  
  return (
    <>
      <div className="about-site">
        <h2 className="section-title">نبذة عن الموقع</h2>
        <p className="about-text">
          مَوقع يسعى لنَشر عِلم وفوائد فَضِيلَة الشَّيخ الدَّكتور حُسَين بن
          عُودَة العَوايشَة
          <br />
          <u> الموقع بإدارة طلاب الشيخ</u>
        </p>
      </div>
      <BookSlider></BookSlider>
      <Slider title={"أحدث المقالات"} items={articles} pageLink={"articles"}></Slider>
      <Slider title={"أحدث الفتاوى"} items={fatawas} pageLink={"fatawas"}></Slider>
    </>
  );
}
