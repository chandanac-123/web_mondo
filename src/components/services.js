
export default function Services({ id }) {
    return (
        <section id={id} className=" p-12 bg-white">
            <h1 className="text-2xl font-light text-black">Corindians is a creative company that crafts innovative ideas for the future.Our mission is to craft brands globally with diversified creativity. We are not only developing your great idea as a visually appealing one but also effectively handle the primary goals of your business.Our team has expertise in designing audience -focused experiences for both digital and physical products.</h1>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 pt-12'>
                <span className='flex-col text-gray-600'>
                    <h1 className='text-black font-semibold pb-2'>Branding & Designing</h1>
                    Corindians revolutionizes crafting brand identity with thoughtful strategies, timeless logos, enticing designs, and versatile visual language.
                </span>
                <span className='  flex-col text-gray-600'>
                    <h1 className='text-black font-semibold pb-2'>Digital Marketing</h1>
                    Leveraging technology for innovative, simplified solutions to construct, promote, communicate, expand results for customers.
                </span>
                <span className='  flex-col text-gray-600'>
                    <h1 className='text-black font-semibold pb-2'>Website Developing</h1>
                    Ensuring your brand consistently connects with users by create engaging websites using scalable and innovative web technologies.
                </span>
                <span className='  flex-col text-gray-600'>
                    <h1 className='text-black font-semibold pb-2'>Mobile Application Services</h1>
                    Our mobile app develope=ment delivers custome ,userr-friendly apps to engage customers,enhance functionality,and ensure a seamless experience.
                </span>
                <span className='  flex-col text-gray-600'>
                    <h1 className='text-black font-semibold pb-2'>Software Solutions</h1>
                    Our custom Software solutions streamline operations,reduce costs, and enhance efficiency ,helping businesses achieve their goals with advanced technology.
                </span>
            </div>

        </section>

    )
}
