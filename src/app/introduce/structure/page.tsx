'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function page() {
    const pathname = usePathname();
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] mt-[105.5px] flex flex-col shadow-md`}>
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
                                <span>Trang chủ</span> / <span>Giới thiệu</span> / <span>Cơ cấu tổ chứ</span>
                            </p>
                        </div>
                        <div className={`${style.contentIntro}`}>
                            <Image width={600} height={600} src={'/structure.png'} alt='structure' /><br />
                            <p className='!mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    MobiFone được thành lập ngày 16/04/1993 với tên gọi ban đầu là Công ty thông tin di động. Ngày 01/12/2014, Công ty được chuyển đổi thành Tổng công ty Viễn thông MobiFone, kinh doanh trong các lĩnh vực: dịch vụ viễn thông truyền thống, VAS, Data, Internet & truyền hình IPTV/cable TV, sản phẩm khách hàng doanh nghiệp, dịch vụ công nghệ thông tin, bán lẻ và phân phối và đầu tư nước ngoài.
                                </span>
                            </p>
                            <p className='!mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <strong className='text-[#005db2]'> <em>Công ty Cổ Phần Và Đầu Tư Ngân Lực</em>  </strong> <br />

                            </p>
                            <p className='ml-10 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Địa chỉ: Số 263, Đường Cầu Giấy,P.Dịch Vọng,Q.Cầu Giấy,Hà Nội
                                </span>
                            </p>
                            <p className='!mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <strong className='text-[#005db2]'> <em>Các Công ty Dịch vụ MobiFone Khu vực 1, 2, 3,  4</em>  </strong>
                            </p>
                            <p className='ml-10 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Có nhiệm vụ kinh doanh toàn bộ các dịch vụ do Tổng công ty cung cấp đối với tất cả các nhóm khách hàng theo mục tiêu, quy hoạch và kế hoạch phát triển của Tổng công ty trên địa bàn được giao.
                                </span>
                            </p>

                            <p className='ml-6 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <strong className='text-[#005db2]'><em>Công ty Dịch vụ MobiFone Khu vực 1</em></strong>
                            </p>
                            <p className='ml-10 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Trụ sở chính tại TP. Hà Nội. <br />
                                    Địa chỉ: Tòa nhà MobiFone, số 5/82 Phố Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, TP. Hà Nội. <br />
                                    Địa bàn kinh doanh tại TP. Hà Nội.
                                </span>
                            </p>
                            <p className='ml-6 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <strong className='text-[#005db2]'><em>Công ty Dịch vụ MobiFone Khu vực 2</em></strong>
                            </p>
                            <p className='ml-10 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Trụ sở chính tại TP. Hồ Chí Minh. <br />
                                    Địa chỉ: Tòa nhà MobiFone - MM 18, đường Trường Sơn, phường 14, Quận 10, TP. Hồ Chí Minh. <br />
                                    Địa bàn kinh doanh tại TP. Hồ Chí Minh.
                                </span>
                            </p>
                            <p className='ml-6 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <strong className='text-[#005db2]'><em>Công ty Dịch vụ MobiFone Khu vực 3</em></strong>
                            </p>
                            <p className='ml-10 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Trụ sở chính tại TP. Ðà Nẵng <br />
                                    Địa chỉ: Số 586 Nguyễn Hữu Thọ, phường Khuê Trung, quận Cẩm Lệ, TP. Đà Nẵng. <br />
                                    Địa bàn kinh doanh tại các tỉnh/TP: Đà Nẵng, Quảng Trị, Thừa Thiên Huế, Quảng Nam, Quảng Ngãi, Bình Định.
                                </span>
                            </p>
                            <p className='ml-6 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <strong className='text-[#005db2]'><em>Công ty Dịch vụ MobiFone Khu vực 4</em></strong>
                            </p>
                            <p className='ml-10 !mr-0 !text-justify !leading-7 text-sm text-[#2d2d2d]'>
                                <span className='text-sm' style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    Trụ sở chính tại Phú Thọ <br />
                                    Địa chỉ: Tòa nhà MobiFone - Khu Đồng Mạ, đường Nguyễn Tất Thành, phường Tiên Cát, TP. Việt Trì, tỉnh Phú Thọ. <br />
                                    Địa bàn kinh doanh tại các tỉnh/TP: Đà Nẵng, Quảng Trị, Thừa Thiên Huế, Quảng Nam, Quảng Ngãi, Bình Định. <br />
                                    Địa bàn kinh doanh tại các tỉnh: Lào Cai, Lai Châu, Điện Biên, Yên Bái, Sơn La, Phú Thọ, Hòa Bình, Hà Nam, Nam Định, Ninh Bình, Vĩnh Phúc, Hà Giang, Tuyên Quang.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
