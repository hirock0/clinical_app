// components/Footer.tsx
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-[#002454]">
      <div className="max-w-[1524px] mx-auto w-11/12 pt-20 pb-10">
        <div className=" flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className='lg:w-5/12'>
            {/* Newsletter Section */}
            <div >
              <h3 className="text-[22px] leading-8 font-normal mb-5 text-[#002454D9] max-w-[400px]">
                Join 1000s of healthcare leaders in making informed staffing decisions based on research and industry expertise.
              </h3>
              <div className="flex flex-col sm:flex-row max-w-md">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="px-[16px] py-[10px] border-2 border-[#dbe4ec] rounded-l  flex-grow focus:outline-2 focus:outline-[#004582] transition-all duration-300 placeholder:text-[#757575] placeholder:font-semibold text-[#002454] text-base font-normal"
                  required
                />
                <button className=" bg-[#004582] text-white px-[16px] py-[10px] rounded-r hover:bg-[#002454] transition-colors duration-300 font-bold cursor-pointer">
                  SUBMIT
                </button>
              </div>
            </div>
            {/* Social Icons - Replace with actual icons */}
            <div className="flex space-x-4  mt-6 text-2xl">
              <Link href="#"> <FaFacebookF /></Link>
              <Link href="#"> <FaLinkedinIn /> </Link>
              <Link href="#"> <FaTwitter /></Link>
              <Link href="#"> <FaInstagram /></Link>

            </div>
          </div>
          {/* Links Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-7/12">



            {/* For Organizations */}
            <div>
              <div className='w-[50px] h-[2px] rounded-[3px] bg-[#63e6b8] mb-5'></div>
              <h4 className="font-bold mb-4 text-[#0075c9] text-sm tracking-wider">FOR ORGANIZATIONS</h4>
              <ul className="space-y-3">
                {['Healthcare', 'Life Sciences', 'Technology', 'Government Services'].map((item) => (
                  <li key={item} className="group">
                    <Link
                      href="#"
                      className="relative flex items-center text-[20px] font-bold tracking-wide pb-1"
                    >
                      <span className="relative">
                        {item}
                        {/* Underline effect */}
                        <span
                          className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#63e6b8] transition-all duration-300 group-hover:w-full"
                        ></span>
                      </span>
                      <span className="ml-1 text-[#0075c9]">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Jobseekers */}
            <div>
              <div className='w-[50px] h-[2px] rounded-[3px] bg-[#63e6b8] mb-5 '></div>
              <h4 className="font-bold mb-4 text-[#0075c9] text-sm tracking-wider">FOR JOBSEEKERS</h4>
              <ul className="space-y-3"  >
                <li className="group">
                  <Link href="#" className="relative flex items-center text-base font-semibold tracking-wide
                  pb-1">
                    <span className='relative'>
                      Search Jobs 
                      <span
                        className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#63e6b8] transition-all duration-300 group-hover:w-full"
                      ></span>
                    </span>
                    <span className="ml-1 text-sm"><FaExternalLinkAlt /></span>
                  </Link>
                </li>
                {['Help Center', 'Why Media'].map((item) => (
                  <li key={item} className='group'>
                    <Link href="#" className="relative flex items-center text-base font-semibold tracking-wide pb-1">
                      <span className="relative">
                        {item}
                        {/* Underline effect */}
                        <span
                          className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#63e6b8] transition-all duration-300 group-hover:w-full"
                        ></span>
                      </span>
                      <span className="ml-1 text-[#0075c9]">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <div className='w-[50px] h-[2px] rounded-[3px] bg-[#63e6b8] mb-5'></div>
              <h4 className="font-bold mb-4 text-[#0075c9] text-sm tracking-wider ">ABOUT</h4>
              <ul className="space-y-3">
                {['Our Process', 'Careers', 'Locations', 'Contact Us', 'Contact The Joint Commission'].map((item) => (
                  <li key={item} className='group'>
                    <Link href="#" className="relative flex items-center text-base font-semibold tracking-wide pb-1">
                      <span className='relative'>
                        {item}
                        <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#63e6b8] transition-all duration-300 group-hover:w-full'></span>
                      </span>

                      <span className="ml-1 text-[#0075c9]">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Links */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#002454]  pt-10">
          {['Sitemap', 'Accessibility', 'Notice at Collection', 'Privacy Policy', 'Terms at Use'].map((item) => (
            <Link
              key={item}
              href="#"
              className="relative text-sm font-bold pb-1 group tracking-wide "
            >
              <span className="relative inline-block pb-[2px]">
                {item}
                {/* Persistent underline */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#63e6b8] mt-[2px]"></span>
                {/* Hover underline animation */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#cf2e2e] 
                          transition-all duration-300 group-hover:w-full mt-[2px]"
                ></span>
              </span>
            </Link>
          ))}
          <span className="font-medium text-sm ">Copyright © {new Date().getFullYear()} Media Staffing Solutions. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;