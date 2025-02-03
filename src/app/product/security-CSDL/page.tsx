'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import BannerSlider from '@/components/BannerSlider';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import Footer from "@/components/Footer";

export default function page() {
    const pathname = usePathname();
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] mt-[105.5px] flex flex-col shadow-md`}>
            <Navigation />
            <BannerSlider />
            <section className={`${style.mainIntro} py-[3.125rem]`}>
                <div className={`${style.container}`}>
                    <div className={`${style.leftIntro}`}>
                        <div className={`${style.textIntro} bg-[#005db2]`}>
                            <div className={`${style.title}`}>
                                <h2 className="mt-2 text-white text-[48px]" style={{ fontFamily: "VIE-HandelGothic" }}>
                                    Sản Phẩm
                                </h2>
                            </div>
                        </div>
                        <div className={`${style.listMenu}`}>
                            <ul>
                                <li className={pathname === "/product" ? `${style.active}` : ""} style={{ paddingLeft: "15px" }}>
                                    <Link className='!text-lg' href={'/product'}>( AI ) Trong hệ thống quản trị</Link>
                                </li>
                                <li className={pathname === "/product/hospital" ? `${style.active}` : ""} style={{ paddingLeft: "15px" }}>
                                    <Link className='!text-lg' href={'/product/hospital'}>Phần quản trị bệnh viện</Link>
                                </li>
                                <li className={pathname === "/product/online-patient-care" ? `${style.active}` : ""} style={{ paddingLeft: "15px" }}>
                                    <Link className='!text-lg' href={'/product/online-patient-care'}>Phần chăm sóc bệnh nhân online</Link>
                                </li>
                                <li className={pathname === "/product/security-CSDL" ? `${style.active}` : ""} style={{ paddingLeft: "15px" }}>
                                    <Link className='!text-lg' href={'/product/security-CSDL'}>Giải pháp bảo mật CSDL</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`${style.rightIntro}`}
                        style={{
                            marginLeft: "2%",
                            width: "65%"
                        }}
                    >
                        <div className={`${style.breadcrumb}`}>
                            <p>
                                <span>Trang chủ</span> / <span>Sản phẩm</span> / <span>Giải pháp bảo mật CSDL</span>
                            </p>
                        </div>
                        <div className='mt-4 ml-[-15px]'>
                            <h1 className='text-4xl opacity-50 text-center'>
                                Hiện Chưa Có Sản Phẩm nào
                            </h1>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </main>
    )
}
