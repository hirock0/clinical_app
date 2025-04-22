"use client";

import {  FaQuoteRight } from "react-icons/fa";

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
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-[#004582] mb-4 max-w-4xl mx-auto">
          “A Valued, Trusted Partner for our Hiring Needs.”
        </h2>
        <p className="text-lg lg:text-2xl font-medium text-[#002454] max-w-4xl mx-auto mb-10">
          For more than 20 years, Medix has helped healthcare and life sciences
          leaders staff hard-to-fill roles that require highly-specialized,
          high-performing candidates.
        </p>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-10 shadow-sm flex items-center relative"
            >
              <FaQuoteRight className="text-7xl text-[#63e6b8] absolute -top-8 right-1/10 p-2"/>
              <div className="w-3/4 mx-auto text-xl">
                <p className="text-[#002454] mb-4 leading-7">
                  “{testimonial?.quote}”
                </p>
                <div className="mt-6 font-bold text-[#002454]">
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
