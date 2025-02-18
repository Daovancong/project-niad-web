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
      image: '/home-slider-images01.jpg'
    },
    {
      id: 2,
      title: 'Product 02',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images03.jpg'
    },
    {
      id: 3,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images02.jpg'
    },
    {
      id: 4,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images04.jpg'
    },
    {
      id: 5,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images05.jpg'
    },
    {
      id: 6,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images06.jpg'
    },
    {
      id: 7,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images07.jpg'
    },
    {
      id: 8,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images08.jpg'
    },
    {
      id: 9,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images09.jpg'
    },
    {
      id: 10,
      title: 'Product 03',
      cpu: 'Intel® Xeon® E5-26XX',
      image: '/home-slider-images10.jpg'
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 11) % items.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
    items[(currentIndex + 3) % items.length],
  ];
  return (
    <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[20vh] flex flex-col shadow-md`}>
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
          </ul>
        </div>
      </div>
      <Navigation />
      <BannerSlider />
      <section className={`${style.partners} p-0`}>
        <div className={`${style.customers} max-w-[1170px] w-full m-auto`}>
          <div className={`${style.title} text-[40px] ml-[2px] mt-11`}>
            <div className="flex w-[20%] h-[2.9px]">
              <div className="flex-[1] bg-[#e91e1e]"></div>
              <div className="flex-[9] bg-[#f8b133]"></div>
            </div>
            <h2 className="mt-4">
              Dự án tiêu biểu của chúng tôi
            </h2>
          </div>
        </div>
      </section>
      <section className='pb-[3.125rem] pt-[3.125rem] overflow-hidden'>
        <div className='w-full flex justify-center'>
          <div className="flex w-[5%] h-[3.2px]">
            <div className="flex-[10] bg-[#e91e1e]"></div>
            {/* <div className="flex-[0] bg-[#f8b133]"></div> */}
          </div>
        </div>
        <div className={`${style.service} flex items-center justify-center  relative z-[999]`}>
          <div
            className="flex justify-center w-12 h-3/4 items-center float-left left-3 cursor-pointer group absolute z-50"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 opacity-100 group-hover:opacity-65 text-[#9c9c9c] hover:text-[#5f5e5efa]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="w-full max-500:flex-shrink-0 p-5 transition-transform duration-700 ease-in-out">
            <div
              className={`${style.mediaFlx} flex w-full max-500:w-full`}
              style={{
                // transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {visibleItems.map((item) => (
                <div key={item.id} className={`${style.cloud} max-500:flex-shrink-0 p-1 transition-transform duration-700 w-1/4 ease-in-out`}>
                  <div className={`${style.inNiad} bg-[#ffffff] hover:scale-y-105 transform transition-transform duration-300 ease-in-out`}>
                    <div className="flex justify-center text-center w-full">
                      <Image
                        className='w-full max-h-[160px] h-auto min-h-[160px] max-500:min-h-[300px]'
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
            className="flex justify-center w-12 h-3/4 items-center float-right right-3 cursor-pointer group absolute"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 opacity-100 group-hover:opacity-65 text-[#9c9c9c] hover:text-[#5f5e5efa]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
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
