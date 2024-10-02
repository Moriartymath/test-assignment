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
  title: "Car Dealer App",
  description: "Get information about your favorite car",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className=" overflow-hidden w-full h-full text-custom text-main"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col  justify-center items-center gap-10 w-full h-full p-8`}
      >
        <header className="text-2xl   py-4 px-2 w-full bg-red-100 justify-center flex ">
          <h1>Choose the car of your dream</h1>
        </header>
        <main className="w-full  h-full 0 bg-orange-50 flex justify-center items-start pt-10">
          <Suspense fallback={<Loading />} key={Math.random()}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
