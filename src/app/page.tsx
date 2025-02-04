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
  // const items = [
  //   {
  //     id: 1,
  //     title: 'Product 01',
  //     cpu: 'Intel® Xeon® E5-26XX',
  //     image: '/Cloud_Service.png'
  //   },
  //   {
  //     id: 2,
  //     title: 'Product 02',
  //     cpu: 'Intel® Xeon® E5-26XX',
  //     image: '/Data_Service.png'
  //   },
  //   {
  //     id: 3,
  //     title: 'Product 03',
  //     cpu: 'Intel® Xeon® E5-26XX',
  //     image: '/Data_Service.png'
  //   },
  //   {
  //     id: 4,
  //     title: 'Product 04',
  //     cpu: 'Intel® Xeon® E5-26XX',
  //     image: '/Cloud_Service.png'
  //   },
  // ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 2) % items.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 2 + items.length) % items.length);
  // };

  // const visibleItems = [
  //   items[currentIndex],
  //   items[(currentIndex + 1) % items.length],
  // ];

  return (
    <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] mt-[105.5px] flex flex-col shadow-md`}>
      <Navigation />
      <BannerSlider />
      {/* <section className={`${style.service} flex items-center justify-center overflow-hidden relative z-[9999] pb-[3.125rem]`}>
        <div
          className={`${style.hoverContainer} flex justify-center w-14 h-28 items-center rounded-[100px] border-solid border-[#39353557] cursor-pointer border-[2px] hover:border-[#00000057] group`}
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
                  <div className="p-7 text-left pb-[75px] relative">
                    <div className={`${style.detail}`}>
                      <form action="">
                        <h4 className="text-2xl font-mono font-bold not-italic leading-[1.32] tracking-normal mt-[-20px]">{item.title}</h4>
                        <ul className="m-0 p-0 lists">
                          <li className="min-h-[30.4px] text-sm not-italic font-sans text-justify tracking-normal mt-4"
                            style={{
                              fontFamily: "Roboto",
                              fontSize: "12px",
                              fontWeight: "normal",
                              fontStretch: "normal",
                              fontStyle: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: "#707070"
                            }}
                          >CPU: {item.cpu}</li>
                          <li className="min-h-[30.4px] text-sm not-italic font-sans text-justify tracking-normal"
                            style={{
                              fontFamily: "Roboto",
                              fontSize: "12px",
                              fontWeight: "normal",
                              fontStretch: "normal",
                              fontStyle: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: "#707070"
                            }}
                          >CORE: 4 cores</li>
                          <li className="min-h-[30.4px] text-sm not-italic font-sans text-justify tracking-normal"
                            style={{
                              fontFamily: "Roboto",
                              fontSize: "12px",
                              fontWeight: "normal",
                              fontStretch: "normal",
                              fontStyle: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: "#707070"
                            }}
                          >HDD: 100GB</li>
                          <li className="min-h-[30.4px] text-sm not-italic font-sans text-justify tracking-normal"
                            style={{
                              fontFamily: "Roboto",
                              fontSize: "12px",
                              fontWeight: "normal",
                              fontStretch: "normal",
                              fontStyle: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: "#707070"
                            }}
                          >RAM: 4GB</li>
                          <li className="min-h-[30.4px] text-sm not-italic font-sans text-justify tracking-normal"
                            style={{
                              fontFamily: "Roboto",
                              fontSize: "12px",
                              fontWeight: "normal",
                              fontStretch: "normal",
                              fontStyle: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: "#707070"
                            }}
                          >IP: 01</li>
                        </ul>
                        <div className={`${style.gia} flex justify-center items-center font-bold mt-6`}>
                          <span className='text-lg font-bold text-[#005db2] mr-2'>770.000 ₫</span>
                          <Image className="ml-3" width={30} height={30} src="/icon/iconLeft.png" alt="gia" />
                        </div> */}
      {/* <Link className={`${style.viewGia}`} href="#">
                          <span className="ml-[50px]">Đặt mua</span>
                          <Image className="ml-3" width={28} height={28} src="/icon/iconLeft-witth.png" alt="gia" />
                        </Link>
    </form>
                    </div >
                  </div >
                </div >
              </div >
            ))
}
          </div >
        </div >
  <div
    className="flex justify-center w-14 h-28 items-center rounded-[100px] border-solid border-[#39353557] hover:border-[#00000057] border-[2px] cursor-pointer group"
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
      </section > */}
      <Boxcpn />
      <Tbaleniad />
      <Partners />
      <Contact />
      <Blog />
      <Footer />

    </main >
  );
}
