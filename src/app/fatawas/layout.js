export const metadata = {
  title: ` ٱلْمَوْقِعُ ٱلرَّسْمِيُّ لِسَمَاحَةِ ٱلشَّيْخِ د .حُسَين بن عُودَةالعَوايشَة | فتاوى الشيخ حسين العوايشة`,
  description: "الموقع الرسمي لسماحة الشيخ الدكتور حسين بن عودة العوايشة",
};
export default function ArticlesLayout({ children }) {
  return (
    <>
      <div className=" about-site">
        <h1 className="section-title"> فتاوى الشيخ حسين العوايشة</h1>
      </div>
      {children}
    </>
  );
}
