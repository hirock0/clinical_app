import Link from 'next/link';
import React from 'react';

const Soluation = () => {

    const solutions = [
        {
            title: "Healthcare",
            description: "Hire certified and experienced healthcare professionals — including specialists in revenue cycle, afield, nursing, insurance, and care management.",
            icon: ">"
        },
        {
            title: "Life Sciences",
            description: "Work with a trusted partner to build specialized teams completely dedicated to your full development lifecycle — from R&D to commercialization.",
            icon: ">"
        },
        {
            title: "Technology",
            description: "Implement, scale and optimize your EHR and healthcare IT initiatives with expert advisory and skilled healthcare technology professionals.",
            icon: ">"
        },
        {
            title: "Government Services",
            description: "Partner with a nationwide government services provider to win and execute contract vehicles with the skilled human capital needed for healthcare, life sciences, and technology initiatives.",
            icon: ">"
        }
    ];

    return (
        <section className="pb-16 px-6 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-[#004582] mb-4 max-w-4xl mx-auto ">
                        Flexible Staffing Solutions for Healthcare and Life Sciences
                    </h2>
                    <p className="text-lg lg:text-2xl font-medium text-[#002454] max-w-4xl mx-auto mb-10">
                        Discover staffing solutions that span the entire healthcare and life sciences ecosystems, and hire highly skilled candidates in your industry when you need them most.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <Link
                            href="#"
                            key={index}
                            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-[#0468af] hover:bg-[#0468af]/5"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#004582] group-hover:text-[#0468af]">
                                    {solution.title}
                                </h3>
                                <span className="text-2xl font-bold text-[#004582] group-hover:text-[#63e6b8]">
                                    {solution.icon}
                                </span>
                            </div>
                            <p className="text-[#002454] group-hover:text-[#002454d9]">
                                {solution.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Soluation;