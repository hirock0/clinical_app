"use client";
import Link from "next/link";
import { FaAngleRight, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useState } from "react";
const Max_lg_links = () => {
  const [menuLgFlag, setMenuLgFlag] = useState(false);
  return (
    <div>
      <div className=" flex items-center justify-between">
        <Link href={"/"}>
          <div className=" flex items-center">
            <span>Healthcare</span>
            <span>
              <FaAngleRight />
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMenuLgFlag(!menuLgFlag)}
          className=" cursor-pointer bg-red-50"
        >
          {!menuLgFlag ? (
            <FaCirclePlus size={20} />
          ) : (
            <FaCircleMinus size={20} />
          )}
        </button>
      </div>
      <div className={` ${!menuLgFlag && "hidden"} bg-slate-300 h-[200px] `}>
        sdfsdf
      </div>
    </div>
  );
};

export default Max_lg_links;
