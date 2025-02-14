'use client';
import React from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";


export default function news() {
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[20vh] flex flex-col shadow-md`}>
            <div className='w-full h-10 bg-[#005db2] flex items-center'>
                <div className='flex justify-end h-full max-w-[1170px] w-full m-auto'>
                    <ul className='p-0 m-0 h-full list-none flex items-center'>
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
            <section className={`${style.slider} py-[1.125rem] overflow-hidden relative"`}>
                <div className={`${style.niadContainer} w-full h-full relative overflow-hidden list-none p-0 z-[1]`}>
                    <div className={`${style.niadWar} relative`}
                    // style={{ transform: "translate3d(-1077px, 0px, 0px)", transition: "0ms" }}
                    >
                        <div className={`${style.niadSlider} text-center text-[18px] flex justify-center items-center`}>
                            <Image
                                className="w-full h-[520px]"
                                src="/banner/NIAD-ai-banner-hitech-ctcp-dau-tu-va-phat-trien-ngan-luc.jpg"
                                alt="Banner description"
                                width={600}
                                height={100}
                            />
                            <div className={`${style.info} absolute flex top-0 left-0 text-center w-full h-full`}>
                                <div className="w-full mt-[-100px]">
                                    <div className={`${style.container} px-6`}>
                                        <h2 className={`${style.textOnBanner} text-[48px] font-bold mt-0 text-left pt-7`}>
                                            Máy chủ ảo vpn
                                            <br />
                                            CLOUD SERVER
                                        </h2>
                                        <p className={`${style.textOnBanner} leading-[26px] text-justify mt-3`}>
                                            Dịch vụ máy chủ ảo VPS/ Cloud Server cho phép bạn thiết lập hạ tầng điện toán có quy mô từ một máy chủ ảo riêng lẻ đến hệ thống có hàng trăm máy chủ với công nghệ ảo hóa vượt trội nhất
                                        </p>
                                        <form action="" className={`${style.formAdvisory} flex text-center mt-5`}>
                                            <input
                                                type="email"
                                                placeholder="Email của bạn"
                                            />
                                            <button type="submit" name="sub" className={`${style.btnAdvise} flex w-[159.4px] h-[47.89px] rounded-[23px] ml-3 text-left items-center justify-center hover:bg-[#CE0101]`}>
                                                Nhận tư vấn
                                                <Image
                                                    className="ml-[10px] mr-[-8px] max-w-full"
                                                    width={36}
                                                    height={36}
                                                    src={'/icon/iconLeft.png'}
                                                    alt="iconLeft"
                                                />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.niadSliders} text-center text-[18px] bg-[#fff] items-center justify-center`}>
                            <Image
                                width={1000}
                                height={400}
                                src="/banner/technology-face-circuit-diagram-background_1017-18300.avif"
                                alt="Banner description"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Blog />
            <Footer />
        </main>
    )
}
