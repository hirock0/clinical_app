
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#0468af]  text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Trusted <br />
            <span className="text-white">Healthcare and Life</span><br />
            Sciences Staffing <br />Agency
          </h1>
          <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Our mission is helping you achieve yours. We create opportunities around the world for organizations and talent.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-green-400 hover:bg-green-500 text-blue-900 font-semibold px-6 py-2 rounded">
              HIRE TALENT
            </button>
            <a
              href="#"
              className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold"
            >
              SEARCH JOBS ↗
            </a>
          </div>
        </div>

        {/* Awards */}
        <div className="flex justify-center gap-6 flex-wrap">
          <Image
            src="/Banner-Image.png"
            alt="Staffing Awards"
            width={400}
            height={400}
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
