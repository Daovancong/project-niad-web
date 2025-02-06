'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function page() {
    const partners = [
        { src: "/BIDV-logo.png", alt: "bidv" },
        { src: "/BIC-logo.jpg", alt: "bic" },
        { src: "/Niad-logo.jpg", alt: "niad" },
        { src: "/BIDV-logo.png", alt: "bidv" },
        { src: "/BIC-logo.jpg", alt: "bic" },
        { src: "/Niad-logo.jpg", alt: "niad" },
    ]
    const pathname = usePathname();
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[15.5vh] flex flex-col shadow-md`}>
            <Navigation />
            <section className={`${style.mainIntro} py-[3.125rem]`}>
                <div className={`${style.container}`}>
                    <div className={`${style.leftIntro}`}>
                        <div className={`${style.textIntro} bg-[#005db2]`}>
                            <div className={`${style.title}`}>
                                <h2 className="mt-2 text-white text-[48px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Giới Thiệu
                                </h2>
                            </div>
                        </div>
                        <div className={`${style.listMenu}`}>
                            <ul>
                                <li className={pathname === "/introduce" ? `${style.active}` : ""}>
                                    <Link href={'/introduce'}>Về chúng tôi</Link>
                                </li>
                                <li className={pathname === "/introduce/structure" ? `${style.active}` : ""}>
                                    <Link href={'/introduce/structure'}>Cơ cấu tổ chức</Link>
                                </li>
                                <li className={pathname === "/introduce/corevalues" ? `${style.active}` : ""}>
                                    <Link href={'/introduce/corevalues'}>Giá trị cố lõi</Link>
                                </li>
                                <li className={pathname === "/introduce/partandcust" ? `${style.active}` : ""}>
                                    <Link href={'/introduce/partandcust'}>Đối tác & Khách hàng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${style.rightIntro}`}>
                        <div className={`${style.breadcrumb}`}>
                            <p>
                                <span>Trang chủ</span> / <span>Giới thiệu</span> / <span>Đối tác và Khách hàng</span>
                            </p>
                        </div>
                        <div className={`${style.customIntro}`}>
                            <div className={`${style.grid}`}>
                                {partners.map((partner, index) => (
                                    <div key={index} className={`${style.logoItem}`}>
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            width={120}
                                            height={50}
                                            objectFit="contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
