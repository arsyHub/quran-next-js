import { Inter } from "next/font/google";
import "./globals.css";
import { IoBook, IoBookmark, IoBookmarkOutline, IoBookOutline } from "react-icons/io5";
import { FaInfo, FaInfoCircle } from "react-icons/fa";
import SurahMenu from "@/components/SurahMenu";
import Image from "next/image";

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
          <div className="w-[5rem]  relative hidden md:block">
            {/* <div className="bg-[#01957D] rounded-br-[30px] shadow-md absolute w-full py-2">
              <Image className="mx-auto shadow-lg" src="/img/quran.png" alt="Logo" width={35} height={35} />
            </div> */}

            <ul className="flex flex-col items-center mt-[100px] gap-10 ">
              <li className="bg-[#D8DFE5] p-2 rounded-lg cursor-pointer">
                <span className="text-[#00957D] text-2xl mb-5">
                  <IoBook />
                </span>
              </li>
              <li>
                <span className="text-[#ACBCC9] text-2xl mb-5">
                  <IoBookmarkOutline />
                </span>
              </li>
            </ul>
          </div>
          {/* end left side */}

          {/* left side menu */}
          <SurahMenu />
          {/* end left side menu */}

          {/* main content */}
          <div className="bg-[#EEF2F3] w-full sm:px-5">
            <div className="bg-[#f7f7f7] mt-1 rounded-xl">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
