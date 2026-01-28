import books from "@/data/books";
import Books from "@/components/books";
export const metadata = {
  title: ` كتب الشيخ حسين العوايشة | ٱلْمَوْقِعُ ٱلرَّسْمِيُّ لِسَمَاحَةِ ٱلشَّيْخِ د .حُسَين بن عُودَةالعَوايشَة`,
  description: "الموقع الرسمي لسماحة الشيخ الدكتور حسين بن عودة العوايشة",
};
export default function Bookspage() {
  return (
    <>
      {/* <div id="books" className="books-page-container"> */}
        <div className=" about-site"> 
          <h1 className="section-title"> كتب الشيخ حسين العوايشة</h1>
        </div>
        <Books />
      {/* </div> */}
    </>
  );
}
