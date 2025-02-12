'use client'
import { WorksData } from "@/constants/works";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Works({ visibleCount, handleViewMore }) {
    const worksRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Adjust threshold for when animation triggers
        );

        if (worksRef.current) {
            observer.observe(worksRef.current);
        }

        return () => {
            if (worksRef.current) {
                observer.unobserve(worksRef.current);
            }
        };
    }, []);

    return (
        <section id="works" ref={worksRef} className="">

            <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 w-full">
                {WorksData?.slice(0, visibleCount).map((item, index) => (
                    <div
                        key={index}
                        className={`text-center text-2xl ${item?.bgColor} ${item?.colSpan} ${item?.rowSpan} ${isVisible ? `fade-in-image animation-delay-${index}` : 'opacity-0'}`}
                    >
                        <Image src={item?.icon} alt={`Grid Item ${index + 1}`} className='w-full h-full object-cover' />
                    </div>
                ))}
            </div>

            {visibleCount < WorksData?.length && (
                <div className="col-span-full text-center mt-6 ">
                    <button
                        onClick={handleViewMore}
                        className='bg-primary text-primary_bg p-3 text-sm hover:bg-transparent hover:text-primary border border-primary'
                    >
                        View More
                    </button>
                </div>
            )}

        </section>

    )
}

{/* <section id="works" className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  grid-flow-row-dense bg-white">
{WorksData.slice(0, visibleCount).map((item) => {
    console.log('item: ', item.colSpan, item.rowSpan);
    return (
        <div
            key={item.id}
            className={`p-0  ${item?.bgColor || "bg-white"} 
         ${item?.colSpan ? `col-span-${item?.colSpan}` : 0} 
         ${item?.rowSpan ? `row-span-${item?.rowSpan}` : 0} hover:opacity-80`}
        >
            <Image src={item.icon} alt="" className="object-contain" />
        </div>
    )
})} */}

{/* View More Button */ }
// {visibleCount < WorksData?.length && (
//     <div className="col-span-full text-center mt-6">
//         <button
//             onClick={handleViewMore}
//             className='bg-black text-white p-3 text-sm hover:bg-transparent hover:text-black border border-black'
//         >
//             View More
//         </button>
//     </div>
// )}
// </section>

