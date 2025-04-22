"use client";
import Link from "next/link";
import { FaAngleRight, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
const Max_lg_links = ({ item }: { item: any }) => {
  const [menuLgFlag, setMenuLgFlag] = useState(false);
  return (
    <div>
      <div className=" flex items-center justify-between px-[5%]">
        <div className=" py-[15px] ">
          <div>
            <div className=" flex items-center">
              <Link href={item?.href} className=" text-[18px] text-[#004582]">
                {item?.title}
              </Link>
              <span>
                <FaAngleRight size={10} />
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setMenuLgFlag(!menuLgFlag)}
          className=" cursor-pointer bg-red-50 text-blue-600"
        >
          {!menuLgFlag ? (
            <FaCirclePlus className=" h-[18px] w-[18px]" />
          ) : (
            <FaCircleMinus className=" h-[18px] w-[18px]" />
          )}
        </button>
      </div>
      <div
        className={` ${
          !menuLgFlag && "hidden"
        } bg-slate-100 px-[5%] py-4 transition-all `}
      >
        {item?.subtitles?.map((item: any, index: any) => (
          <div className="my-10" key={index}>
            <Link href={item?.href} className=" flex items-center">
              <GoDotFill size={10} />
              <h1 className=" ml-2 text-[18px] text-[#004582] ">
                {item?.title}
              </h1>
              <FaAngleRight size={10} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Max_lg_links;
