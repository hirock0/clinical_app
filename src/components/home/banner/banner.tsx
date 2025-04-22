
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative bg-[#0468af] text-white lg:pt-10 lg:pb-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 h-full w-full">
        <Image
          src="/Banner-Bg.png" // Replace with your image path
          alt="Background pattern"
          fill
          className="object-cover object-right-bottom opacity-10"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-6 ">
            Your Trusted <br />
            <span className="text-white">Healthcare and Life</span><br />
            Sciences Staffing <br />Agency
          </h1>
          <p className=" text-lg lg:text-2xl mb-8 max-w-xl mx-auto lg:mx-0">
            Our mission is helping you achieve yours. We create opportunities around the world for organizations and talent.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#63e6b8] hover:bg-white text-[#002454] font-semibold px-8 py-3 rounded transition-colors duration-300 text-lg lg:text-2xl cursor-pointer">
              HIRE TALENT
            </button>
            <a
              href="#"
              className="border-2 border-white hover:border-[#63e6b8] px-8 py-3 rounded hover:bg-[#63e6b8] hover:text-[#002454] font-semibold transition-colors duration-300 flex items-center text-lg lg:text-2xl cursor-pointer"
            >
              SEARCH JOBS <span className="ml-1 text-sm"><FaExternalLinkAlt /></span>
            </a>
          </div>
        </div>

        {/* Awards */}
        <div className="flex justify-center gap-6 flex-wrap relative z-10">
          <Image
            src="/Banner-Image.png"
            alt="Staffing Awards"
            width={690}
            height={690}
            className="w-full max-w-[690px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
