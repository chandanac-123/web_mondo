
export default function Contact({ id }) {
    return (
        <section id={id} className="w-full bg-white p-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                <div className="text-black text-center md:text-left">
                    <p className="text-slate-500">Web Mondo</p>
                    <p className="text-slate-500">Copyright 2020</p>
                </div>
                <div className="text-black flex flex-col text-center md:text-left">
                    <a className="text-slate-500">Twitter</a>
                    <a className="text-slate-500">Instagram</a>
                </div>
                <div className="text-black flex flex-col text-center md:text-left">
                    <a className="text-slate-500">Facebook</a>
                    <a className="text-slate-500">Behance</a>
                </div>
                <div className="text-black flex flex-col text-center md:text-left">
                    <a href="mailto:hello@corindians.com" className="text-slate-500">
                        hello@corindians.com
                    </a>
                    <a href="tel:812-931-2139" className="text-slate-500">
                        (+91) 812-931-2139
                    </a>
                </div>
            </div>
        </section>

    )
}

