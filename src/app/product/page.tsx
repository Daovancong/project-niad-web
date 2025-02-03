'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import BannerSlider from '@/components/BannerSlider';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import Footer from "@/components/Footer";


export default function product() {
    const products = [
        {
            id: 1,
            image: '/Cloud_Service.png',
            title: 'Product AI 01',
            cpu: 'Intel® Xeon® E5-26XX',
            core: '2 Cores',
            hdd: '20 GB',
            ram: '2 GB',
            ip: '1',
        },
        {
            id: 2,
            image: '/Cloud_Service.png',
            title: 'Product AI 02',
            cpu: 'Intel® Xeon® E5-26XX',
            core: '3 Cores',
            hdd: '40 GB',
            ram: '4 GB',
            ip: '1',
            price: "500.000",
        },
        {
            id: 3,
            image: '/Cloud_Service.png',
            title: 'Product AI 03',
            cpu: 'Intel® Xeon® E5-26XX',
            core: '2 Cores',
            hdd: '60 GB',
            ram: '6 GB',
            ip: '1',
            price: "1000.000",
        },
        {
            id: 4,
            image: '/Cloud_Service.png',
            title: 'Product AI 04',
            cpu: 'Intel® Xeon® E5-26XX',
            core: '2 Cores',
            hdd: '80 GB',
            ram: '8 GB',
            ip: '1',
            price: "1500.000",
        },
        {
            id: 5,
            image: '/Cloud_Service.png',
            title: 'Product AI 05',
            cpu: 'Intel® Xeon® E5-26XX',
            core: '1 Cores',
            hdd: '128 GB',
            ram: '12 GB',
            ip: '1',
            price: "2000.000",
        },
        {
            id: 6,
            image: '/Cloud_Service.png',
            title: 'Product AI 06',
            cpu: 'Intel® Xeon® E5-26XX',
            core: '3 Cores',
            hdd: '256 GB',
            ram: '16 GB',
            ip: '1',
            price: "2500.000",
        }
    ];
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
                                    <Link className='!text-lg' href={'/product/online-patient-care'}>phần chăm sóc bệnh nhân online</Link>
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
                                <span>Trang chủ</span> / <span>Sản phẩm</span> / <span>( AI ) Trong hệ thống quản trị</span>
                            </p>
                        </div>
                        <div className='mt-4 ml-[-15px]'>
                            <div className='flex flex-wrap'>
                                {/* items  */}
                                {products.map((product) => (
                                    <div key={product.id} className='relative rounded-xl items-center justify-between w-1/3 group'>
                                        <div className='p-4 w-full'>
                                            <div className='rounded-md' style={{ border: "1px solid #ececec" }}>
                                                <div className='flex items-center'>
                                                    <Image
                                                        src={product.image}
                                                        width={350}
                                                        height={350}
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <div className='py-8 '>
                                                    <h3 className='m-0 p-0 text-[18px] min-h-[60px] mx-3 text-left text-[#005db2]'
                                                        style={{
                                                            fontFamily: 'VIE-HandelGothic',
                                                            fontWeight: "bold",
                                                            fontStretch: "normal",
                                                            fontStyle: "normal",
                                                            lineHeight: "1.32",
                                                            letterSpacing: "normal",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        {product.title}
                                                    </h3>
                                                    <div className='mx-3'>
                                                        <div className='text-xs text-left text-[#707070]'
                                                            style={{
                                                                fontFamily: "Roboto",
                                                                fontWeight: "normal",
                                                                fontStretch: "normal",
                                                                fontStyle: "normal",
                                                                lineHeight: "2.14",
                                                                letterSpacing: "normal",
                                                            }}
                                                        >
                                                            CPU: {product.cpu}
                                                        </div>
                                                        <div className='text-xs text-left text-[#707070]'
                                                            style={{
                                                                fontFamily: "Roboto",
                                                                fontWeight: "normal",
                                                                fontStretch: "normal",
                                                                fontStyle: "normal",
                                                                lineHeight: "2.14",
                                                                letterSpacing: "normal",
                                                            }}
                                                        >
                                                            CORE: {product.core}
                                                        </div>
                                                        <div className='text-xs text-left text-[#707070]'
                                                            style={{
                                                                fontFamily: "Roboto",
                                                                fontWeight: "normal",
                                                                fontStretch: "normal",
                                                                fontStyle: "normal",
                                                                lineHeight: "2.14",
                                                                letterSpacing: "normal",
                                                            }}
                                                        >
                                                            HDD: {product.hdd}
                                                        </div>
                                                        <div className='text-xs text-left text-[#707070]'
                                                            style={{
                                                                fontFamily: "Roboto",
                                                                fontWeight: "normal",
                                                                fontStretch: "normal",
                                                                fontStyle: "normal",
                                                                lineHeight: "2.14",
                                                                letterSpacing: "normal",
                                                            }}
                                                        >
                                                            RAM: {product.ram}
                                                        </div>
                                                        <div className='text-xs text-left text-[#707070]'
                                                            style={{
                                                                fontFamily: "Roboto",
                                                                fontWeight: "normal",
                                                                fontStretch: "normal",
                                                                fontStyle: "normal",
                                                                lineHeight: "2.14",
                                                                letterSpacing: "normal",
                                                            }}
                                                        >
                                                            IP: {product.ip}
                                                        </div>
                                                    </div>
                                                </div>
                                                <form action="/" className='w-full' method='GET'>
                                                    <button
                                                        className='flex text-base font-bold text-left items-center !mt-2 !mb-7'
                                                        style={{
                                                            fontFamily: "VIE-HandelGothic",
                                                            fontStretch: "normal",
                                                            fontStyle: "normal",
                                                            lineHeight: "1.33",
                                                            letterSpacing: "normal",
                                                            textTransform: "uppercase",
                                                            color: "#005db2",
                                                            padding: "10px 20px",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            margin: " 20px auto",
                                                        }}
                                                    >
                                                        {product.price}₫ &nbsp;
                                                        <Image className="ml-3" width={30} height={30} src="/icon/iconLeft.png" alt="gia" />
                                                    </button>
                                                    <Link
                                                        href={'/contact'}
                                                        className={`${style.viewGia} !mt-[-73px] group-hover:opacity-100 group-hover:visible`}
                                                        style={{ transition: "0,3s" }}
                                                    >
                                                        <span className="ml-[50px]">Đặt mua</span>
                                                        <Image className="ml-3" width={28} height={28} src="/icon/iconLeft-witth.png" alt="gia" />
                                                    </Link>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main >

    )
}
