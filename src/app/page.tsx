'use client';
import { useState } from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Boxcpn from "@/components/Boxcpn";
import Link from "next/link";
import BannerSlider from "@/components/BannerSlider";
import Partners from "@/components/Partners";
import Tbaleniad from "@/components/Tbaleniad";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
export default function Home() {
  const items = [
    {
      id: 1,
      title: 'Product 01',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/Cloud_Service.png'
    },
    {
      id: 2,
      title: 'Product 02',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/Data_Service.png'
    },
    {
      id: 3,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/Data_Service.png'
    },
    {
      id: 4,
      title: 'Product 04',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/Cloud_Service.png'
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + items.length) % items.length);
  };

  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
  ];

  return (
    <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[15vh] flex flex-col shadow-md`}>
      <div className='w-full h-10 bg-[#005db2] flex items-center'>
        <div className='flex justify-end h-full max-w-[1170px] w-full m-auto'>
          <ul className='p-0 m-0 h-full list-none flex items-center'>
            {/* <li className='cursor-pointer h-full items-center py-4 relative' >
              <Link href={'#'}>  </Link>
            </li> */}
            <li className='cursor-pointer h-full items-center py-2 relative mr-4'>
              <Link href={'#'} className='whitespace-nowrap font-sans text-lg text-left flex items-center' id='login' style={{ fontFamily: 'inherit', lineHeight: '1.29', letterSpacing: 'normal', fontWeight: 'normal', fontStretch: 'normal', color: '#ffffff', textDecoration: 'none', }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>Đăng Nhập<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

              </Link>
            </li>
            {/* <li className='cursor-pointer h-full items-center py-4 relative'>
              <Link href={'#'}>  </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <Navigation />
      <BannerSlider />
      <section className={`${style.service} flex items-center justify-center overflow-hidden relative z-[9999] pb-[3.125rem]`}>
        <div
          className={`${style.hoverContainer} flex justify-center w-8 h-12 items-center rounded-[100px] border-solid border-[#39353557] cursor-pointer border-[2px] hover:border-[#00000057] group`}
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 opacity-30 group-hover:opacity-65"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="flex justify-center items-center max-w-[1170px] w-full m-auto overflow-hidden relative">
          <div
            className={`${style.mediaFlx} flex w-[calc(100%+30px)] justify-center transition-all duration-500 ease-in-out`}
            style={{
              // transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {visibleItems.map((item) => (
              <div key={item.id} className={`${style.cloud}flex-shrink-0 p-5 w-full transition-transform duration-700 ease-in-out`}>
                <div className={`${style.inNiad} rounded-[60px] bg-[#ffffff] hover:scale-y-105 hover:rounded-[60px] transform transition-transform duration-300 ease-in-out`}>
                  <div className="flex justify-center text-center">
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt={item.title}
                    />
                  </div>
                </div >
              </div >
            ))
            }
          </div >
        </div >
        <div
          className="flex justify-center w-8 h-12 items-center rounded-[100px] border-solid border-[#39353557] hover:border-[#00000057] border-[2px] cursor-pointer group"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 opacity-30 group-hover:opacity-65"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </section >
      <Boxcpn />
      <Tbaleniad />
      <Partners />
      <Contact />
      <Blog />
      <Footer />
    </main >
  );
}
