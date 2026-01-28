import articles from "@/data/articles";
export async function generateMetadata(props) {
  const params = await props.params;
  const article = await articles.find((a) => a.id ==params.article);
  if(article!= undefined)
  return {
    title: article.title,
    description: article.body.slice(0, 160),
  };
  else
    return{
  title:"not found"}
}

export default async function articlePage(props) {
  const params = await props.params;
  const { article } = params;
  if (article > articles.length - 1) {
    return (
      <h1
        key={article}
        style={{ backgroundColor: "red", color: "white", textAlign: "center" }}
      >
        article not found{" "}
      </h1>
    );
  }
  const articleComp = articles.map((art) => {
    if (art.id == article) {
      return (
        <div className="article-page-div" key={art.id}>
          <h3>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</h3>
          <h2>{art.title}</h2>
          <p>{art.body}</p>
        </div>
      );
    }
  });
  return <>{articleComp}</>;
}
