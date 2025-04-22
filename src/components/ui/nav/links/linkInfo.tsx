import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
const LinkInfo = ({ item }: { item: any }) => {
  return (
    <div>
      <Link href={"/healthcare"}>
        <div className=" flex flex-col items-center">
          <h1 className=" overflow-hidden flex flex-col">
            <span>{item?.title}</span>
            <span className=" bg-cyan-300 w-full h-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-all"></span>
          </h1>
          <FaCaretDown size={20} className=" text-cyan-200" />
        </div>
      </Link>
      <div className=" hidden group-hover:block group-hover:absolute group-hover:left-0 group-hover:right-0  z-50  group-hover:bg-white group-hover:h-[300px] rounded-lg overflow-hidden transition-all text-slate-600 ">
        <div className=" flex w-full h-full">
          <div className=" w-3/4 flex gap-5 p-5 ">
            <div className=" w-1/4">
              <h1 className=" text-4xl font-bold text-blue-900 tracking-tight">
                {item?.title}
              </h1>
              <p>{item?.info?.descriptions}</p>

              <Link href={""}>
                <button className=" bg-blue-900 text-white px-4  py-2 rounded-sm">
                  Learn more
                </button>
              </Link>
            </div>

            <div className="">
              <div className=" grid grid-cols-2 gap-5">
                {item?.info?.links?.map((item: any, index: any) => (
                  <div key={index} className="">
                    <div className=" flex">
                      <div className=" text-2xl text-blue-500/95">
                        {item?.icon}
                      </div>
                      <h1 className=" text-2xl text-blue-500/95">{item?.title}</h1>
                    </div>
                    <p>{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-1/4 p-5 bg-slate-200">df</div>
        </div>
      </div>
    </div>
  );
};

export default LinkInfo;
