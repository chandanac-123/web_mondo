
// export default function Services({ id }) {
//     return (
//         <section id={id} className="sm:p-12 p-6  mt-20">
//             <div>
//                 <h1 className='text-secondary font-semibold pb-2 text-3xl text-center'>About Us</h1>
//                 <div className="sm:text-xl text-base font-light text-secondary sm:mx-20 mx-3">
//                     At <strong className="font-semibold">Web Mondo,</strong> we believe in the power of technology to transform businesses. Our mission
//                     is simple: <strong className="font-semibold">Simplifying tech, amplifying brand</strong>. We specialize in creating innovative
//                     solutions that not only streamline your digital presence but also elevate your brand to new
//                     heights.
//                     With a team of experienced designers, developers, and marketers, we offer a wide range of
//                     services tailored to meet the needs of modern businesses. Whether you&#39;re looking to build a
//                     powerful website, launch a mobile app, or enhance your brand through strategic digital
//                     marketing, we're here to help you achieve your goals.
//                 </div>
//             </div>

//             <div>
//                 <h1 className='text-secondary font-semibold pb-2 text-3xl mt-10 text-center'>Vision</h1>
//                 <div className="sm:text-xl text-base font-light  text-secondary sm:mx-20 mx-3">
//                     To empower businesses by simplifying technology, creating innovative solutions, and
//                     amplifying their brand presence in a digital world.
//                 </div>
//             </div>

//             <div>
//                 <h1 className='text-secondary font-semibold pb-2 text-3xl text-center mt-10'>Mission:</h1>
//                 <div className="sm:text-xl text-base font-light text-secondary sm:mx-20 mx-3">
//                     At Web Mondo, we are dedicated to providing businesses with cutting-edge digital
//                     solutions that drive growth and success. By combining our expertise in branding, design,
//                     digital marketing, web and mobile app development, and custom software solutions, we help
//                     our clients navigate the complexities of technology while elevating their brands. We strive to
//                     create impactful, user-centric experiences that resonate with audiences, ensuring every
//                     business we work with achieves its fullest potential in the ever-evolving digital landscape.
//                 </div>
//             </div>

//             <h1 className='text-secondary font-semibold pb-2 text-3xl mt-10 text-center'>Our Services</h1>
//             <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 pt-12 '>
//                 <span className='flex-col text-gray-500'>
//                     <h1 className='text-secondary font-semibold pb-2 '>Branding & Designing</h1>
//                     At Web Mondo, we specialize in creating strong, cohesive brand
//                     identities that reflect the essence of your business. From logo design and color schemes to
//                     typography and brand guidelines, we ensure that every element of your brand speaks
//                     directly to your target audience. We combine creativity with strategic thinking to develop
//                     branding that not only stands out visually but also connects emotionally with your customers,
//                     fostering trust and loyalty. Whether you&#39;re a startup in need of a brand identity or an
//                     established company looking to refresh your image, we craft designs that bring your vision to
//                     life and make a lasting impression.
//                 </span>
//                 <span className='  flex-col text-gray-500'>
//                     <h1 className='text-secondary font-semibold pb-2'>Digital Marketing</h1>
//                     In the ever-evolving digital landscape, having a robust online presence is
//                     essential for success. Our digital marketing team leverages the latest trends and
//                     technologies to develop data-driven strategies that fuel your business growth. From SEO
//                     and PPC campaigns to social media management and email marketing, we create tailored
//                     solutions to increase visibility, drive traffic, and convert leads into loyal customers. Our
//                     approach is results-focused, ensuring that every campaign we run is optimized for maximum
//                     return on investment. By analyzing real-time data and continuously refining our strategies,
//                     we help you stay ahead of the competition and achieve measurable results.
//                 </span>
//                 <span className='  flex-col text-gray-500'>
//                     <h1 className='text-secondary font-semibold pb-2'>Website Developing</h1>
//                     Your website is often the first point of interaction with potential
//                     customers, and we make sure it&#39;s an exceptional one. At Web Mondo, we develop
//                     responsive, user-centric websites that not only look great but also provide an outstanding
//                     user experience across all devices and platforms. Whether you&#39;re looking for a simple
//                     brochure website or a complex e-commerce solution, our team of developers uses the latest
//                     technologies to build websites that are fast, secure, and easy to navigate. We focus on
//                     creating seamless, intuitive experiences that keep visitors engaged and drive conversions,
//                     ensuring your website is a powerful tool for your business growth.
//                 </span>
//                 <span className='  flex-col text-gray-500'>
//                     <h1 className='text-secondary font-semibold pb-2'>Mobile Application Services</h1>
//                     In today’s mobile-first world, having a strong mobile
//                     presence is essential. We develop custom mobile applications for both iOS and Android
//                     platforms that are intuitive, functional, and engaging. Whether you&#39;re building a simple app
//                     or a complex enterprise solution, our team ensures that your app is designed to meet your
//                     unique needs while delivering a smooth and enjoyable user experience. From
//                     conceptualization to launch and ongoing updates, we work closely with you throughout the
//                     process to ensure your app achieves its full potential and provides value to your customers.
//                 </span>
//                 <span className='  flex-col text-gray-500'>
//                     <h1 className='text-secondary font-semibold pb-2'>Software Solutions</h1>
//                     Every business has unique challenges, and sometimes off-the-shelf
//                     software just doesn&#39;t cut it. At Web Mondo, we offer custom software development services
//                     designed to meet your specific business needs. Our team of experts works with you to
//                     understand your requirements and design tailored solutions that streamline processes,
//                     improve efficiency, and drive innovation. From enterprise resource planning (ERP) systems
//                     to customer relationship management (CRM) software and beyond, we build scalable,
//                     secure, and high-performing software that solves problems and helps your business thrive.
//                 </span>
//             </div>

//         </section>

//     )
// }



export default function Services({ id }) {
    const services = [
        {
            title: "Branding & Designing",
            description: "We craft cohesive brand identities with stunning logos, colors, and typography to make your business stand out.",
        },
        {
            title: "Digital Marketing",
            description: "Our data-driven strategies boost your online presence through SEO, PPC, social media, and email marketing.",
        },
        {
            title: "Website Developing",
            description: "We build fast, responsive, and user-friendly websites that enhance engagement and drive conversions.",
        },
        {
            title: "Mobile Application Services",
            description: "We create intuitive, high-performance mobile apps for iOS and Android tailored to your business needs.",
        },
        {
            title: "Software Solutions",
            description: "We develop custom software solutions that streamline operations, improve efficiency, and drive innovation.",
        }
    ];

    return (
        <section id={id} className="sm:p-12 p-6 mt-20">
            {/* About Us */}
            <div className="fade-in animation-delay-1">
                <h2 className="text-secondary font-semibold pb-2 text-3xl text-center">About Us</h2>
                <p className="sm:text-xl text-base font-light text-secondary sm:mx-20 mx-3">
                    At <strong className="font-semibold">Web Mondo,</strong> we believe in the power of technology to transform businesses. Our mission
                    is simple: <strong className="font-semibold">Simplifying tech, amplifying brand</strong>. We specialize in creating innovative
                    solutions that not only streamline your digital presence but also elevate your brand to new
                    heights.
                    With a team of experienced designers, developers, and marketers, we offer a wide range of
                    services tailored to meet the needs of modern businesses. Whether you&#39;re looking to build a
                    powerful website, launch a mobile app, or enhance your brand through strategic digital
                    marketing, we're here to help you achieve your goals.
                </p>
            </div>

            {/* Vision */}
            <div className="fade-in animation-delay-2 mt-10">
                <h2 className="text-secondary font-semibold pb-2 text-3xl text-center">Vision</h2>
                <p className="sm:text-xl text-base font-light text-secondary sm:mx-20 mx-3">
                    To empower businesses by simplifying technology, creating innovative solutions, and
                    amplifying their brand presence in a digital world.
                </p>
            </div>

            {/* Mission */}
            <div className="fade-in animation-delay-3 mt-10">
                <h2 className="text-secondary font-semibold pb-2 text-3xl text-center">Mission</h2>
                <p className="sm:text-xl text-base font-light text-secondary sm:mx-20 mx-3">
                    At Web Mondo, we are dedicated to providing businesses with cutting-edge digital
                    solutions that drive growth and success. By combining our expertise in branding, design,
                    digital marketing, web and mobile app development, and custom software solutions, we help
                    our clients navigate the complexities of technology while elevating their brands. We strive to
                    create impactful, user-centric experiences that resonate with audiences, ensuring every
                    business we work with achieves its fullest potential in the ever-evolving digital landscape.
                </p>
            </div>

            {/* Services */}
            <div className="fade-in animation-delay-4 mt-10 text-center">
                <h2 className="text-secondary font-semibold pb-2 text-3xl">Our Services</h2>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 pt-12">
                {services.map((service, i) => (
                    <div key={service.title} className={`fade-in animation-delay-${i + 5} flex-col text-gray-500`}>
                        <h3 className="text-secondary font-semibold pb-2">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
