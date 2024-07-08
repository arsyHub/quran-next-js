import { Inter } from "next/font/google";
import "./globals.css";
import SurahMenu from "@/components/SurahMenu";
import Image from "next/image";
import NavSide from "@/components/NavSide";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className=" flex gap-5 items-center w-full h-[60px] fixed top-0 bg-[#ffffff]  z-50">
          <div className="bg-[#01957c00] flex items-center justify-center ml-2">
            <Image src="/img/quran.png" alt="Logo" width={35} height={35} />

            <h1 className="text-[#00957D] font-bold ml-1 italic">Quran App</h1>
          </div>
        </nav>

        <div className="flex mt-14">
          {/* left side */}
          <NavSide />

          {/* left side menu */}
          <SurahMenu />

          {/* main content */}
          <div className="bg-[#EEF2F3] w-full sm:px-5">
            <div className="bg-[#f7f7f7] mt-1 rounded-xl">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
