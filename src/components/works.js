import { WorksData } from "@/constants/works";
import Image from "next/image";

export default function Works({visibleCount,handleViewMore}) {
    return (
        <section id="works" className="min-h-screen grid md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white">
            {WorksData.slice(0, visibleCount).map((item) => (
                <div
                    key={item.id}
                    className={`p-0 ${item.bgColor || "bg-white"} 
                         ${item.colSpan ? `col-span-${item.colSpan}` : ""} 
                         ${item.rowSpan ? `row-span-${item.rowSpan}` : ""} hover:opacity-80`}
                >
                    <Image src={item.icon} alt="" />
                </div>
            ))}

            {/* View More Button */}
            {visibleCount < WorksData?.length && (
                <div className="col-span-full text-center mt-6">
                    <button
                        onClick={handleViewMore}
                        className='bg-black text-white p-3 text-sm hover:bg-transparent hover:text-black border border-black'
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    )
}
