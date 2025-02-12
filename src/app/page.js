
'use client';

import { useEffect, useState } from 'react';
import { WorksData } from '@/constants/works';
import Contact from '@/components/contact';
import Services from '@/components/services';
import HomeSection from '@/components/home';
import Header from '@/components/header';
import Works from '@/components/works';
import Whatsup from '@public/icons/whatsup.png';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Show first 10 items

  const handleViewMore = () => {
    setVisibleCount(WorksData.length); // Show all items
  };

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth',
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen font-sans relative">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-screen object-cover"
        >
          <source src="/icons/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content on top of the video */}
      <div className="relative z-10">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <HomeSection id="home" />

        <Services id="services" />

        <Works handleViewMore={handleViewMore} visibleCount={visibleCount}  />

        <Contact id="contact" />

        <a
          href="https://chat.whatsapp.com/EQIYTSjZex0JIobLww7LFU"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-50"
        >
          <Image
            src={Whatsup}
            alt="WhatsApp"
            className="w-16 h-16 drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
}


// 'use client';

// import { useEffect, useState } from 'react';
// import bgimage from '@public/new.jpg'
// import { WorksData } from '@/constants/works';
// import Contact from '@/components/contact';
// import Services from '@/components/services';
// import HomeSection from '@/components/home';
// import Header from '@/components/header';
// import Works from '@/components/works';
// import Whatsup from '@public/icons/whatsup.png'
// import Image from 'next/image';

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(10); // Show first 10 items

//   const handleViewMore = () => {
//     setVisibleCount(WorksData.length); // Show all items
//   };

//   useEffect(() => {
//     const handleScroll = (event) => {
//       event.preventDefault();
//       const targetId = event.currentTarget.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         window.scrollTo({
//           top: targetElement.offsetTop - 60,
//           behavior: 'smooth',
//         });
//       }
//     };

//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', handleScroll);
//     });

//     return () => {
//       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.removeEventListener('click', handleScroll);
//       });
//     };
//   }, []);

//   return (
//     <div className="min-h-screen font-sans">
//       {/* Shared Background for Header and Home Section */}

//       <div
//         className="relative bg-cover bg-center min-h-screen"
//       // style={{ backgroundClip: `url(${bgvideo.mp4})` }}
//       >

//         <video  autoPlay loop muted  width="100%" >
//           <source src="/icons/bgvideo.mp4" type="video/mp4"  />
//           Your browser does not support the video tag.
//         </video>

//         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

//         <HomeSection id="home" />
//       </div>

//       <Services id="services" />

//       <Works handleViewMore={handleViewMore} visibleCount={visibleCount} />

//       <Contact id="contact" />

//       <a
//         href="https://chat.whatsapp.com/EQIYTSjZex0JIobLww7LFU"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-10 right-10 z-50"
//       >
//         <Image src={Whatsup} alt="WhatsApp" className="w-16 h-16 drop-shadow-lg hover:scale-110 transition-transform duration-300" />
//       </a>

//     </div>

//   );
// }



{/* <section id="works" className="min-h-screen grid md:grid-cols-2 lg:grid-cols-4 items-center justify-between bg-white">
        {WorksData?.map((item) => {
          return (
            <div
              key={item.id}
              className={`p-0 ${item.bgColor || "bg-white"} 
                      ${item.colSpan ? `col-span-${item.colSpan}` : ""} 
                      ${item.rowSpan ? `row-span-${item.rowSpan}` : ""} hover:opacity-80`}
            >
              <Image src={item.icon} alt=''/>
            </div>
          )
        })}

      </section> */}