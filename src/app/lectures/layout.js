export default function LecturesPage({children}){
    return (
      <>
        <div className=" about-site">
          <h1 className="section-title"> محاضرات الشيخ حسين العوايشة</h1>
        </div>
        {children}
      </>
    );
}