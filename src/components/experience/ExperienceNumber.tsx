'use client'
import React, { useEffect, useState } from 'react';

const ExperienceNumber = () => {
    const [years, setYears] = useState(0);
    const [livesImpacted, setLivesImpacted] = useState(0);
    const [hoursCompleted, setHoursCompleted] = useState(0);

    useEffect(() => {
        // Animation duration in milliseconds
        const duration = 2000;
        const startTime = Date.now();

        const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
            // const start = 0;
            // const increment = target / (duration / 16); 

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(progress * target);

                setter(value);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        animateCount(20, setYears);
        animateCount(120, setLivesImpacted);
        animateCount(7, setHoursCompleted);
    }, []);
    return (
        <section className="bg-white max-w-[1524] mx-auto w-11/12 text-center rounded lg:-mt-28 z-10 relative ">
            <div className="p-10 md:p-20 ">
                <h2 className="text-3xl md:text-5xl font-black text-[#004582] mb-4">
                    Staffing Experience You Can Trust
                </h2>
                <p className="text-lg lg:text-2xl font-medium text-[#002454] max-w-4xl mx-auto mb-10">
                    As a trusted healthcare staffing agency for more than 20 years, we&apos;ve helped companies and
                    organizations just like yours source highly qualified candidates for key roles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x-5 divide-[#63e6b8] ">
                    {/* Years of Experience */}
                    <div className="p-6">
                        <div className="text-[80px] font-black text-[#004582] ">
                            {years}<span className='text-[#0075c9]'>+</span> 
                        </div>
                        <h3 className="text-2xl font-bold text-[#004582] ">
                            YEARS OF HEALTHCARE AND LIFE SCIENCES INDUSTRY EXPERIENCE
                        </h3>

                    </div>
                    {/* Clients Served */}
                    {/* Lives Impacted */}
                    <div className="p-6">
                        <div className="text-[80px]  font-black text-[#004582]">
                            {livesImpacted.toLocaleString()}<span className='text-[#0075c9]'>K+</span> 
                        </div>
                        <h3 className="text-2xl font-bold text-[#004582]  ">
                            CLIENT AND TALENT LIVES IMPACTED
                        </h3>
           
                    </div>

                    {/* Hours Completed */}
                    <div className="p-6">
                        <div className="text-[80px]  font-black text-[#004582]">
                            {hoursCompleted.toLocaleString()}<span className='text-[#0075c9]'>M+</span> 
                        </div>
                        <h3 className="text-2xl font-bold text-[#004582]">
                            HOURS OF SERVICE COMPLETED BY MEDIX TALEN
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceNumber;