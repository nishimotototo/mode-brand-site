import "./globals.css";
import { Noto_Serif_JP } from "next/font/google";
import Header from "./components/Header";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={serif.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
