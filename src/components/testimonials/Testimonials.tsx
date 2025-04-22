"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "The Medix team is responsive, attentive, and asks the right questions to understand our organization's needs. The quality of candidates is outstanding. Throughout the assignment Medix provided exemplary customer service.",
    author: "Maria",
    position: "RWJ Barnabas Health",
  },
  {
    quote:
      "I appreciate how Medix understands our business, which helps ensure we get quality talent. I also appreciate their consistent communication. They are a very professional team and have great relationship building styles.",
    author: "Corey",
    position: "Duke Health",
  },
  {
    quote:
      "Medix helped connect me with my dream job. I am beyond thankful for my recruiter. She walked me through the entire process and told me what to expect. It was so helpful getting that feedback and support to join this team and start out strong.",
    author: "Kimberly",
    position: "Tampa",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-12 lg:py-20 max-w-[1524px] mx-auto w-11/12 rounded-2xl my-10 lg:my-20 bg-white text-center">
      <div className="">
        <h2 className="text-[60px] max-md:text-3xl leading-14 w-3/4 mx-auto font-[900] text-blue-900/95 mb-4">
          “A Valued, Trusted Partner for our Hiring Needs.”
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto text-[22px] mb-12">
          For more than 20 years, Medix has helped healthcare and life sciences
          leaders staff hard-to-fill roles that require highly-specialized,
          high-performing candidates.
        </p>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6 shadow-sm h-[484px] flex items-center relative"
            >
              <FaQuoteRight className="text-7xl text-lime-400 absolute -top-8 right-1/4 p-2" />
              <div className=" w-3/4 mx-auto text-[20px] ">
                <p className=" text-gray-800 mb-4  leading-7">
                  “{testimonial?.quote}”
                </p>
                <div className="mt-6 font-bold text-blue-900 ">
                  {testimonial?.author}
                </div>
                <div className=" text-gray-500">{testimonial?.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
