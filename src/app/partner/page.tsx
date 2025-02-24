'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import BannerSlider from '@/components/BannerSlider';
export default function partner() {
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
            <BannerSlider />
            <section className={`${style.partners} p-0`}>
                <div className={`${style.customers} max-w-[1170px] w-full m-auto`}>
                    <div className={`${style.title} text-[40px] ml-[2px] mt-11`}>
                        <div className="flex w-[30%] h-[2.9px]">
                            <div className="flex-[4] bg-[#e91e1e]"></div>
                            <div className="flex-[6] bg-[#f8b133]"></div>
                        </div>
                        <h2 className="mt-4">
                            ĐỐI TÁC & KHÁCH HÀNG
                        </h2>
                    </div>
                    <div className={`${style.swiperContainer} mt-[30px] w-full h-full`}>
                        <div className={`${style.swiperWrapper}`} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                            <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                                <Image width={10000} height={60} className='!w-[60%]' src="/partners/Logo-hanh-chinh-cong.jpg" alt="partners 01" />
                            </div>
                            <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                                <Image width={10000} height={60} className='!w-[60%]' src="/partners/bo-y-te.png" alt="partners 02" />
                            </div>
                            <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                                <Image width={10000} height={60} src="/partners/logo-giao-duc-2.jpg" alt="partners 03" />
                            </div>
                            <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                                <Image width={10000} height={60} src="/partners/bidv-logo.png" alt="partners 04" />
                            </div>
                            <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                                <Image width={10000} height={60} src="/partners/niad-logo-2.jpg" alt="partners 05" />
                            </div>
                            <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                                <Image width={1000} height={60} src="/partners/virtnam-post-logo.png" alt="partners 06" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
