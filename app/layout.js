import localFont from "next/font/local";
import "./_styles/globals.css";
import { Suspense } from "react";
import Loading from "./_components/Loading";

const geistSans = localFont({
  src: "./_public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./_public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col  items-center mt-20 gap-10`}
      >
        <header className="text-2xl z-10  py-4 px-2">
          <h1>Choose the car of your dream</h1>
        </header>
        <main className="w-full z-10 ">
          <Suspense fallback={<Loading />} key={Math.random()}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
