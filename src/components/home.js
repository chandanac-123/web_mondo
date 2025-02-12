import Image from "next/image";
import logo from '@public/icons/logo4.svg'

export default function HomeSection({ id }) {
    return (
        <section id={id} className="h-screen flex flex-col gap-5 items-center text-center justify-center">
            <h1 className="lg:text-8xl text-4xl font-bold text-white">Simplifying Tech,</h1>
            <h1 className="lg:text-8xl text-4xl font-bold text-white">Amplifying Brands</h1>
            <h1 className="lg:text-sm text-xs font-medium text-white mx-3">We transform complex technology into seamless solutions, helping your business connect,
            grow, and shine in the digital world.</h1>
            {/* <Image src={logo} alt=""/> */}
            <a href='#works' className='bg-white text-black p-3 text-sm hover:bg-transparent hover:text-white border border-white'>View our works</a>
        </section>
    )
}
