import articles from "@/data/articles"
import Link from "next/link";
export default function Articles(){
    let articlesList = articles.map((article)=>{
        return(
            <div className="article" key={article.id}>
                <h3>{article.title.slice(0,22)}</h3>
                <p>{article.brief}</p>
                <Link href={`articles/${article.id}`}>
                اقرأ المقال
                </Link>
            </div>
        )
    })
    return (
      <>
        <div id="articles" className="tab-content">
          <div className="articles-list">
           {articlesList}
          </div>
        </div>
      </>
    );
}