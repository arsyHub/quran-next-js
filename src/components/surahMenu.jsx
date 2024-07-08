"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "./ui/Skeleton";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

async function fetchData() {
  const res = await fetch("https:equran.id/api/v2/surat");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function SurahMenu() {
  const [activeItem, setActiveItem] = useState(1);
  const [dataSurah, setDataSurah] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetchData()
      .then((data) => setDataSurah(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataSurah) {
    return <Skeleton />;
  }

  const HandleActiveItem = (nomor) => {
    Cookies.set("activeItem", nomor);
    setActiveItem(nomor);
    router.push(`/${nomor}`);
  };

  return (
    <div>
      <div className="bg-[#f7f7f7] w-[300px] h-[90vh] hidden md:flex flex-col items-center pt-3 ">
        <label className="w-[280px] py-3 input input-bordered flex items-center gap-2">
          <input type="text" className="grow text-sm" placeholder="Cari nama surah" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-7 w-7 opacity-70 text-[#00957D]">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </label>

        <div className="rounded-md pt-5 mt-10 overflow-y-scroll w-full flex flex-col items-center">
          {dataSurah.data.map((surah) => (
            <div
              onClick={() => HandleActiveItem(surah.nomor)}
              key={surah.nomor}
              className={surah.nomor === activeItem ? " bg-[white] cursor-pointer shadow-md p-5 rounded-lg w-[270px] flex  gap-3 border border-[#00957D] mb-4" : "bg-[white] cursor-pointer p-5 rounded-lg w-[270px] flex gap-3  mb-4"}
            >
              <div className=" relative w-[30px] h-[33px] flex items-center justify-center">
                <Image className="absolute left-0 top-0" src="/img/ic-frame-number.svg" alt="Logo" width={30} height={30}></Image>
                <h1 className="text-[#00957D] font-bold">{surah.nomor}</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[#00957D] font-bold">{surah.namaLatin}</h1>
                  <p className=" text-[12px]">{surah.arti}</p>
                  <p className="text-[#00957D] text-[12px]">{surah.jumlahAyat} Ayat</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
