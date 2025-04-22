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
          <FaCaretDown size={16} className=" text-cyan-200" />
        </div>
      </Link>
      <div className=" hidden group-hover:block group-hover:absolute group-hover:left-0 group-hover:right-0  z-50  shadow-2xl bg-white rounded-lg overflow-hidden transition-all text-slate-600 ">
        <div className=" flex w-full h-full">
          <div className=" w-5/6 p-5  flex gap-5 ">
            <div className="w-2/6 space-y-5">
              <h1 className=" text-4xl font-bold text-blue-900 tracking-tight">
                {item?.title}
              </h1>

              <p className=" text-slate-900/70 leading-6 font-medium text-[18px] w-4/6">
                {item?.info?.descriptions}
              </p>

              <Link href={""}>
                <button className=" bg-blue-900 text-white px-4  py-2 rounded-sm">
                  Learn more
                </button>
              </Link>
            </div>

            <div className="w-4/6">
              <div className=" grid grid-cols-2 gap-10">
                {item?.info?.links?.map((item: any, index: any) => (
                  <div key={index} className="">
                    <div className=" flex relative">
                      <div className=" absolute -left-10 text-3xl text-blue-500/95">
                        {item?.icon}
                      </div>
                      <h1 className=" text-2xl text-blue-500/95">
                        {item?.title}
                      </h1>
                    </div>
                    <p className=" w-1/2 font-medium ">{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-1/4 p-5 bg-blue-100/60">
            <div className=" space-y-5 px-5">
              {item?.descriptions?.map((item: any, index: any) => (
                <p
                  className={`${
                    index === 0
                      ? "font-bold text-2xl tracking-tight text-blue-800"
                      : " text-blue-950"
                  } `}
                  key={index}
                >
                  {item?.p}
                </p>
              ))}
            </div>
            <div className=" mt-5 flex justify-center items-center">
              <button className=" border border-blue-600/60 shadow px-4 py-2 rounded text-sm tracking-wide text-blue-950">
                {item?.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkInfo;
