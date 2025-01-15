import type { Metadata } from "next";
import NavigationBar from './components/NavigationBar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Next js",
  description: "Generated by chan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ol>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/list'>목록 페이지</Link></li>
          <li><Link href='/detail/1'>상세 페이지 1</Link></li>
          <li><Link href='/detail/2'>상세 페이지 2</Link></li>
        </ol>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
