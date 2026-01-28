import fatawas from "@/data/fatawas";

export async function generateMetadata(props) {
  const params = await props.params;
  const fatwa = await fatawas.find((a) => a.id == params.fatwa);
  if (fatwa)
    return {
      title: fatwa.title,
      description: fatwa.body.slice(0, 160),
    };
  else
    return {
      title: "not found",
    };
}

export default async function Fatwa(props) {
  const params = await props.params;
  const { fatwa } = params;

  if (fatwa > fatawas.length - 1) {
    return (
      <h1
        key={fatwa}
        style={{
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        fatwa not found{" "}
      </h1>
    );
  }
  const fatwaElement = fatawas.map((f) => {
    if (f.id == fatwa) {
      return (
        <div key={f.id} className="fatwa-page-div">
          <p className="question">
            السائل:
            <br />
            <span>{f.title}</span>
            <br />
            أجاب شيخنا حسين بن عودة العوايشة حفظه الله:
          </p>
          <p className="answer">{f.body}</p>
        </div>
      );
    }
  });

  return <>{fatwaElement}</>;
}
