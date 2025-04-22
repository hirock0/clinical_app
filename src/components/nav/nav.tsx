"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import LinkInfo from "../ui/nav/links/linkInfo";
import { HiMenuAlt4 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FaAngleRight, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Max_lg_links from "../ui/nav/max_lg_links/max_lg_links";

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

  const Max_Lg_info = [
    {
      title: "Healthcare",
      subtitles: [
        {
          title: "Biotech and Pharma",
          href: "/",
        },
        {
          title: "Clinical Research",
          href: "/",
        },
        {
          title: "Medical Device",
          href: "/",
        },
        {
          title: "Quality, Validation, and Regulatory",
          href: "/",
        },
      ],
      href: "/allied",
    },
    {
      title: "Life Sciences",
      subtitles: [
        {
          title: "Biotech and Pharma",
          href: "/",
        },
        {
          title: "Clinical Research",
          href: "/",
        },
        {
          title: "Medical Device",
          href: "/",
        },
        {
          title: "Quality, Validation, and Regulatory",
          href: "/",
        },
      ],
      href: "/allied",
    },
    {
      title: "Technology",
      subtitles: [
        {
          title: "Epic EHR Advisory Services",
          href: "/",
        },
        {
          title: "Epic EHR Staffing Solutions",
          href: "/",
        },
        {
          title: "Healthcare IT",
          href: "/",
        },
      ],
      href: "/allied",
    },
    {
      title: "Government",
      subtitles: [
        {
          title: "Epic EHR Advisory Services",
          href: "/",
        },
        {
          title: "Epic EHR Staffing Solutions",
          href: "/",
        },
        {
          title: "Healthcare IT",
          href: "/",
        },
      ],
      href: "/allied",
    },
    {
      title: "For Job Seekers",
      subtitles: [
        {
          title: "Search Jobs",
          href: "/",
        },
        {
          title: "Help Center",
          href: "/",
        },
        {
          title: "Why Medix",
          href: "/",
        },
      ],
      href: "/allied",
    },
    {
      title: "Resource Center",
      subtitles: [
        {
          title: "Staffing Insights",
          href: "/",
        },
        {
          title: "Career Tips",
          href: "/",
        },
        {
          title: "News",
          href: "/",
        },
      ],
      href: "/allied",
    },
    {
      title: "About Us",
      subtitles: [
        {
          title: "Our Process",
          href: "/",
        },
        {
          title: "Testimonials",
          href: "/",
        },
        {
          title: "Careers",
          href: "/",
        },
      ],
      href: "/allied",
    },
  ];

  const [menuFlag, setMenuFlag] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      const width = e.target.innerWidth;

      if (width > 1024) {
        setMenuFlag(false);
      }
    });
    return () => {
      window.removeEventListener("resize", (e: any) => {
        const width = e.target.innerWidth;

        if (width > 1024) {
          setMenuFlag(false);
        }
      });
    };
  }, []);

  return (
    <nav
      className={`${
        menuFlag && "bg-white"
      } text-white relative lg:border-b lg:h-[189.34px]  lg:border-b-cyan-400`}
    >
      <div className=" py-[20px] px-[5%] h-full flex items-center justify-between">
        <div className="">
          <div className=" h-[47.55px] w-[214px] my-[12px] mx-[5px]">
            {!menuFlag ? (
              <Image
                src={"https://i.ibb.co.com/7txdX2HG/logo-png.png"}
                alt="logo"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
            ) : (
              <Image
                src={"https://i.ibb.co.com/Tx912LkL/logo-dk-png.png"}
                alt="logo"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
            )}
          </div>
          <div className=" max-lg:hidden flex mt-10 max-[1400px]:flex-col max-[1400px]:items-start gap-2 items-center">
            <h1 className=" text-[14px] font-semibold">For Organizations:</h1>
            <ul className=" font-semibold flex  gap-5 text-[18px] max-[1400px]:text-[15px] items-center">
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
          <div className=" max-lg:hidden flex  gap-5 ">
            <ul className=" font-semibold  h-full flex  gap-5 text-[15px] max-[1400px]:text-[12px]  items-center">
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
          {/* hamb_start */}
          <div className=" lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuFlag(!menuFlag);
              }}
              className="relative w-9 h-[22px] cursor-pointer"
            >
              <div className="relative w-full h-full">
                <span
                  className={`absolute top-0 left-0 h-[9px] w-full rounded-[2px] transition-all duration-300 ease-in-out ${
                    menuFlag ? "rotate-45 top-[6.5px] bg-blue-900" : "bg-white"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[9px] w-full rounded-[2px]  transition-all duration-300 ease-in-out ${
                    menuFlag
                      ? "-rotate-45 bottom-[6.5px] bg-blue-900"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          !menuFlag ? "h-0" : "h-full border-t border-t-black  "
        } bg-white  w-full transition-all`}
      >
        <div className={`${!menuFlag ? "hidden" : "block"} text-black mt-5 `}>
          <div className="">
            <h1 className=" text-[12px] text-[#666666] px-[5%]">
              For Organizations:
            </h1>
            <ul className=" font-bold">
              {Max_Lg_info?.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index > 1 && " border-b-[0.5px] border-b-[#00458233]"
                  } `}
                >
                  <Max_lg_links item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center justify-center px-[5%] py-5">
            <button className=" bg-blue-900 font-semibold text-white py-2 w-full rounded-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
