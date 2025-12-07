import type { Metadata } from "next";
import { Noto_Serif_JP, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "美月 MITSUKI | ボディとハートの癒やしサロン",
  description: "大阪府泉佐野市のリラクゼーションサロン。もみほぐしと色彩セラピー・タロットを組み合わせた、心身ともに癒される特別な空間をご提供します。",
  keywords: "美月, MITSUKI, リラクゼーション, もみほぐし, 色彩セラピー, タロット, 泉佐野市, 大阪",
  openGraph: {
    title: "美月 MITSUKI | ボディとハートの癒やしサロン",
    description: "大阪府泉佐野市のリラクゼーションサロン。もみほぐしと色彩セラピー・タロットを組み合わせた、心身ともに癒される特別な空間をご提供します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifJP.variable} ${zenMaruGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
