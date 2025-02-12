
export default function Contact({ id }) {
    return (
        <section id={id} className="w-full p-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                <div className="text-center md:text-left">
                    <p className="text-secondary">Web Mondo</p>
                    <p className="text-secondary">Copyright 2020</p>
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <a className="text-secondary">Twitter</a>
                    <a className="text-secondary">Instagram</a>
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <a className="text-secondary">Facebook</a>
                    <a className="text-secondary">Behance</a>
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <a href="mailto:connect@thewebmondo.com" className="text-secondary">
                        connect@thewebmondo.com
                    </a>
                    <a href="tel:7994884419" className="text-secondary">
                        (+91) 7994884419 , (+971) 58 524 0137
                    </a>
                </div>
            </div>
        </section>

    )
}

