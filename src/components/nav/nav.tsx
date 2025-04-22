import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import LinkInfo from "../ui/nav/links/linkInfo";
const Nav = () => {
  const NavInfo = [
    {
      title: "Healthcare",
      href: "/healthcare",
    },
    {
      title: "Life Sciences",
      href: "/life_sciences",
    },
    {
      title: "Technology",
      href: "/technology",
    },
    {
      title: "Government",
      href: "/government",
    },
  ];
  const NavInfo2 = [
    {
      title: "For Job Seekers",
      href: "/healthcare",
    },
    {
      title: "Resource Center",
      href: "/life_sciences",
    },
    {
      title: "About Us",
      href: "/technology",
    },
  ];

  return (
    <nav className=" text-white relative border-b h-[189.34px]  border-b-cyan-400">
      <div className=" py-[20px] h-full flex items-center justify-between">
        <div className="">
          <div className=" h-[47.55px] w-[214px] my-[12px] mx-[5px]">
            <Image
              src={"https://i.ibb.co.com/7txdX2HG/logo-png.png"}
              alt="logo"
              width={500}
              height={500}
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" flex mt-10  gap-2 items-center">
            <h1 className=" text-[14px] font-semibold">For Organizations:</h1>
            <ul className=" font-semibold flex  gap-5 text-[18px] items-center">
              {NavInfo?.map((item, index) => (
                <li key={index} className=" group">
                  <LinkInfo title={item?.title} href={item?.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* right_start */}
        <div className=" h-full flex items-end ">
          <div className=" flex  gap-5 ">
            <ul className=" font-semibold  h-full flex  gap-5 text-[15px] items-center">
              {NavInfo2?.map((item, index) => (
                <li key={index} className=" group">
                  <LinkInfo title={item?.title} href={item?.href} />
                </li>
              ))}
            </ul>

            <div className=" relative -top-5">
              <button className=" text-[#004582] font-semibold text-sm bg-[#63E6B8] px-4 py-2 rounded">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
