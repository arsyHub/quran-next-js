"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline, IoBookOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { RiHome6Line } from "react-icons/ri";
import { LiaQuranSolid } from "react-icons/lia";
import { PiMosqueLight } from "react-icons/pi";

async function fetchData() {
  const res = await fetch("https:equran.id/api/v2/surat/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function SurahItem() {
  const [dataSurahItem, setDataSurahItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => setDataSurahItem(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataSurahItem) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* title surah */}
      <div className=" px-5 py-2 ">
        <div className="bg-gradient-to-r from-green-400  to-[#00957D] rounded-xl p-5">
          <div className="relative">
            <h1 className="text-white font-bold text-lg sm:text-xl">{dataSurahItem.data.namaLatin}</h1>
            <Image className="absolute right-0 top-0" src="/img/quran2.png" alt="quran" width={55} height={55} />
          </div>

          <p className="text-[#f2f4f6] text-xs sm:text-sm">
            {dataSurahItem.data.arti} - {dataSurahItem.data.jumlahAyat} Ayat - {dataSurahItem.data.tempatTurun}
          </p>
        </div>
      </div>

      {/* end title surah */}

      <div className="overflow-y-scroll h-[66vh] pb-16">
        {dataSurahItem?.data?.ayat?.map((ayat) => (
          <div key={ayat.nomorAyat} className="mt-5 w-ful mx-5 bg-white p-5 rounded-md">
            {/* <div className="flex md:justify-between"> */}
            <div className="border border-[#EA9600] h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] rounded-full flex justify-center items-center font-bold  text-[#EA9600]">
              <h1 className="text-xs sm:text-sm">{ayat.nomorAyat}</h1>
            </div>
            <p className="text-[#00957D] text-2xl sm:text-3xl text-right">{ayat.teksArab}</p>
            {/* </div> */}

            <div className="mt-10">
              <p className="text-[#00957D] font-bold text-sm">{ayat.teksLatin}</p>
              <p className="text-[#000000] mt-1 text-sm">{ayat.teksIndonesia}</p>
            </div>

            <hr className="mt-5" />
            <div className="flex gap-5 mt-3 ">
              <div className="tooltip" data-tip="putar">
                <div className="cursor-pointer flex items-center justify-center bg-[#00957D] p-2 rounded-full text-white">
                  <CiPlay1 />
                </div>
              </div>

              <div className="tooltip" data-tip="simpan">
                <div className="cursor-pointer flex items-center justify-center bg-[#00957D] p-2 rounded-full text-white">
                  <IoBookmarkOutline />
                </div>
              </div>

              <div className="tooltip" data-tip="tafsir">
                <div className="cursor-pointer flex items-center justify-center bg-[#00957D] p-2 rounded-full text-white">
                  <MdMenuBook />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop show */}
      <div className="hidden join sm:grid grid-cols-2 sticky bottom-0 w-[200px] float-end">
        <button className="join-item btn text-[#00957ca5]">sebelumnya</button>
        <button className="join-item btn text-[#00957D]">
          <div className="flex items-center ">
            berikutnya
            <span className="block text-xl">
              <GrFormNextLink />
            </span>
          </div>
        </button>
      </div>

      {/* mobile show */}
      <div className="sm:hidden w-full flex items-center justify-center bg-[#ffffff] border border-t-1 h-[50px] fixed bottom-0">
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-2xl text-[#00957D]">
              <PiMosqueLight />
            </span>
            <p className="text-[#00957D] text-[10px]">Beranda</p>
          </div>
          <div className="shadow-lg cursor-pointer flex items-center -mt-5 w-[60px] h-[60px] justify-center bg-[#00957D] p-2 rounded-full text-white">
            <span className="text-3xl -mt-2">
              {/* <IoBookOutline /> */}
              <LiaQuranSolid />
            </span>

            <p className="absolute text-white text-[9px] bottom-2.5">AYAT</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-xl text-[#00957D]">
              <IoBookmarkOutline />
            </span>
            <p className="text-[#00957D] text-[10px]">Bookmark</p>
          </div>
        </div>
      </div>
    </div>
  );
}
