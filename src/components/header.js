import humberger from '@public/icons/humberger.svg'
import Image from 'next/image'

export default function Header({isMenuOpen,setIsMenuOpen}) {
    return (
        <>
            <div className="flex justify-between items-center py-4 px-12  fixed top-0 left-0 w-full">
                <header className="text-white font-bold">Web Mondo</header>
                <nav className="hidden md:flex gap-6">
                    <a href="#home" className="text-white hover:text-blue-300">Home</a>
                    <a href="#works" className="text-white hover:text-blue-300">Works</a>
                    <a href="#services" className="text-white hover:text-blue-300">Services</a>
                    <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
                </nav>
                <button
                    className="md:hidden block text-white"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Image  src={humberger} alt='' />
                </button>
            </div>

            {
                isMenuOpen && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-3/4 max-w-sm shadow-lg text-center">
                            <button
                                className="absolute top-4 right-4 text-black"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ssssss
                            </button>
                            <nav className="flex flex-col gap-4 mt-6">
                                <a
                                    href="#home"
                                    className="text-black hover:text-blue-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="#works"
                                    className="text-black hover:text-blue-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Works
                                </a>
                                <a
                                    href="#services"
                                    className="text-black hover:text-blue-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Services
                                </a>
                                <a
                                    href="#contact"
                                    className="text-black hover:text-blue-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </div>
                )
            }
        </>
    )
}
