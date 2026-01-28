import lectures from "@/data/lectures";
import Link from "next/link";
export default function Lectures() {
  const lecturesElement = lectures.map((lectures) => {
    return (
      <div  className="lectures-div" key={lectures.id}>
        <img src={lectures.thumbnail}></img>
        <div className="lectures-details">
          <h3>{lectures.lecturesTitle}</h3>
          <Link href={`/lectures/${lectures.id}`}>الدخول على المحاضرات</Link>
        </div>
      </div>
    );
  });
  return <div className="lectures-page-div">{lecturesElement}</div>;
}
