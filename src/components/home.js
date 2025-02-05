
export default function HomeSection({ id }) {
    return (
        <section id={id} className="h-screen flex flex-col gap-5 items-center text-center justify-center">
            <h1 className="lg:text-8xl text-4xl font-bold text-white">Simplifying Tech,</h1>
            <h1 className="lg:text-8xl text-4xl font-bold text-white">Amplifying Brands</h1>
            <a href='#works' className='bg-white text-black p-3 text-sm hover:bg-transparent hover:text-white border border-white'>View our works</a>
        </section>
    )
}
