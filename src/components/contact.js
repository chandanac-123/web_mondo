
export default function Contact({ id }) {
    return (
        <section id={id} className="w-full h-auto p-10 grid grid-cols-2 lg:grid-cols-4 gap-2 text-center justify-between bg-white">
            <div className='text-black'>
                <p className='text-slate-500'>Web Mondo</p>
                <p className='text-slate-500'>Copyright 2020</p>
            </div>
            <div className='text-black flex-col flex '>
                <a className='text-slate-500'>Twitter</a>
                <a className='text-slate-500'>Instagram</a>
            </div>
            <div className='text-black flex-col flex '>
                <a className='text-slate-500'>Facebook</a>
                <a className='text-slate-500'>Behance</a>
            </div>
            <div className='text-black flex-col flex '>
                <a href='mailto:hello@corindians.com' className='text-slate-500'>hello@corindians.com</a>
                <a href='tel:812-931-2139' className='text-slate-500'>(+91) 812-931-2139</a>
            </div>
        </section>
    )
}

