import articles from "@/data/articles";
import fatawas from "@/data/fatawas";
import Link from "next/link";
export default function Fatawas() {
  let fatawasList = fatawas.map((fatwa) => {
    return (
      <div className="fatwa" key={fatwa.id}>
        <h3>{fatwa.title}</h3>
        <Link href={`fatawas/${fatwa.id}`}>اقرأ الجواب</Link>
      </div>
    );
  });
  return (
    <>
      <div id="fatawas" className="tab-content">
        <div className="fatawas-list">{fatawasList}</div>
      </div>
    </>
  );
}
