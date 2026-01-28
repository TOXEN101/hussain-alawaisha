import lectures from "@/data/lectures";

export default async function LecturesSubPage(props) {
  const params = await props.params;
  const { lectureId } = params;

  if (lectureId > lectures.length - 1) {
    return (
      <h1
        key={lectureId}
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
  const lecturesElement = lectures[lectureId].lectures.map((lecture) => {
    return (
      <div key={lecture.id} class="lecture">
        <h3>{lecture.title}</h3>
        <iframe
          width="100%"
          height="300"
          src={lecture.link}
          frameborder="0"
          allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    );
  });
  return <div className="lectures-grid">{lecturesElement}</div>;
}
