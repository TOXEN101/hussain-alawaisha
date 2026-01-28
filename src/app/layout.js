import Header from "@/components/header";
import "./globals.css"
export const metadata = {
  title: ` ٱلْمَوْقِعُ ٱلرَّسْمِيُّ لِسَمَاحَةِ ٱلشَّيْخِ د .حُسَين بن عُودَةالعَوايشَة`,
  description: (
    "الموقع الرسمي لسماحة الشيخ الدكتور حسين بن عودة العوايشة"),
    
    
};
const today = new Date();
const year = today.getFullYear();

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header></Header>
        {children}
        <footer>
          <p>جميع الحقوق محفوظة © {year}</p>
        </footer>
      </body>
    </html>
  );
}
