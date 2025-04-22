import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

const LinkInfo = (props: any) => {
  return (
    <div>
      <Link href={"/healthcare"}>
        <div className=" flex flex-col items-center">
          <h1 className=" overflow-hidden flex flex-col">
            <span>{props?.title}</span>

            <span className=" bg-cyan-300 w-full h-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-all"></span>
          </h1>
          <FaCaretDown size={20} className=" text-cyan-200" />
        </div>
      </Link>
      <div className=" hidden group-hover:block group-hover:absolute group-hover:left-0 group-hover:right-0  z-50  group-hover:bg-white group-hover:h-[300px] rounded-lg overflow-hidden transition-all text-black ">
        <div className=" flex w-full h-full">
          <div className=" w-3/4 p-5 bg-red-100">as</div>
          <div className=" w-1/4 p-5 bg-slate-200">df</div>
        </div>
      </div>
    </div>
  );
};

export default LinkInfo;
