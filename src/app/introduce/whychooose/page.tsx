'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function page() {
    const pathname = usePathname();
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
            <section className={`${style.mainIntro} py-[3.125rem]`}>
                <div className={`${style.container}`}>
                    <div className={`${style.leftIntro}`}>
                        <div className={`${style.textIntro} bg-[#005db2]`}>
                            <div className={`${style.title}`}>
                                {/* <div className="flex w-[50%] h-[3.5px]">
                                    <div className="flex-[6] bg-[#f8b133]"></div>
                                    <div className="flex-[4] bg-[#e91e1e]"></div>
                                </div> */}
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
                                <li className={pathname === "/introduce/whychooose" ? `${style.active}` : ""}>
                                    <Link href={'/introduce/whychooose'}>Tại sao nên chọn XTP</Link>
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
                                <span>Trang chủ</span> / <span>Giới thiệu</span> / <span>Tại sao nên chọn XTP - AI, BIG DATA</span>
                            </p>
                        </div>

                        <div className={`${style.contentIntro}`}>
                            <p className='!mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    <b>XTP – AI, BIG DATA </b> được cung ứng dụng rộng rãi trong ngành Y tế - nhà cung cấp giải pháp quản trị tiên phong tại Việt Nam với uy tín thương hiệu lâu đời, chất lượng chăm sóc khách hàng vượt trội cùng với những ưu điểm nổi bật của dịch vụ như:
                                </span>
                            </p>
                            <p>
                                <strong className='font-bold text-[#005db2]'> CÔNG NGHỆ HIỆN ĐẠI </strong>
                            </p>
                            <p className='ml-2'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Công nghệ được ứng dụng rất rộng rãi và nổi tiếng như OpenStack và xây dựng theo mô hình Self-service giúp mềm dẻo trong cung cấp dịch vụ công nghệ riêng.
                                </span>
                            </p>
                            <p className='!mr-0 !text-justify !leading-7'>&nbsp;</p>
                            <p>
                                <strong className='font-bold text-[#005db2]'>AN TOÀN, ĐÁNG TIN CẬY</strong>
                            </p>
                            <p className='ml-2'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Hệ thống bảo mật An toàn thông tin máy chủ được đặt tại Trung tâm dữ liệu lớn, đáp ứng theo chuẩn quốc tế. Cam kết ổn định, an toàn, bảo mật, tiết kiệm thời gian.
                                </span>
                            </p>
                            <p className='!mr-0 !text-justify !leading-7'>&nbsp;</p>

                            <p>
                                <strong className='font-bold text-[#005db2]'>CHẤT LƯỢNG CAO</strong>
                            </p>
                            <p className='ml-2'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Dịch vụ cung cấp các giải pháp quản trị phần mềm của XTP – AI, Big Data được phát triển trên các cụm máy chủ phiến chuyên dụng cho hạ tầng đám mây giúp tối ưu hoá tốc độ truy xuất.
                                </span>
                            </p>
                            <p className='!mr-0 !text-justify !leading-7'>&nbsp;</p>
                            <p>
                                <strong className='font-bold text-[#005db2]'>CHUYÊN NGHIỆP</strong>
                            </p>
                            <p className='ml-2'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Đội ngũ hỗ trợ kỹ thuật trực tuyến 24/24 luôn có mặt giải quyết các thắc mắc của khách hàng sớm nhất. Chuyên nghiệp và thân thiện.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main >
    )
}
