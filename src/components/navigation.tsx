import Link from 'next/link';
import React, { useState } from "react";
import style from "@/app/style/styles.module.css";


export default function Navigation() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible((prev) => !prev);
    };

    return (
        <nav className={`${style.hdMenu}`}>
            <div className={`${style.container}`}>
                <div className={`${style.logo}`}>
                    <Link href="/">
                        <img
                            className="h-16"
                            src="/logo.png"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className='flex-grow-[1]'></div>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${style.menuMain} ${menuVisible ? "!block" : ""} transition-all duration-500 ease-in-out`}
                >
                    <ul className={`${style.afHover}`}>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="/introduce" className="hover:text-blue-700 transition duration-300 font-bold">
                                Giới thiệu
                            </Link>
                            <ul className={`${style.subMenu} z-[99999]`}>
                                <li>
                                    <Link className='text-white' href={'/introduce'}> Về chúng tôi </Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'/introduce/structure'}>Cơ cấu tổ chức</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'/introduce/corevalues'}>Giá trị cốt lõi</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'/introduce/partandcust'}>Đối tác/Khách hàng</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="/product" className="hover:text-blue-700 transition duration-300 font-bold">
                                Sản phẩm
                            </Link>
                            <ul className={`${style.subMenu} z-[99999] !w-[300px]`}>
                                <li>
                                    <Link className='text-white' href={'/product'}> (AI) Trong hệ thống quản trị </Link>
                                </li>
                                <li className={`relative ${style.Menu} group`}>
                                    <Link className='text-white justify-between' href={'/product/hospital'}>
                                        phần mềm quản trị bệnh viện
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </Link>

                                    <ul className={`${style.subMenu} absolute !left-[845px] !top-[222px] !w-[340px] !hidden group-hover:!block`} >
                                        <li>
                                            <Link className='text-white' href={'/product/hospital'}> Phần mềm quản thiết bị, vật tư y tế </Link>
                                        </li>
                                        <li>
                                            <Link className='text-white' href={'/product/hospital'}>Phần mềm quản lý bệnh nhân,bệnh án điện tử</Link>
                                        </li>
                                        <li>
                                            <Link className='text-white' href={'/product/hospital'}>Phần mềm đăng ký khám online</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`relative ${style.Menu} group`}>
                                    <Link className='text-white' href={'/product/online-patient-care'}>
                                        Phần mềm chăm sóc bệnh nhân online
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </Link>
                                    <ul className={`${style.subMenu} absolute !left-[845px] !top-[269px] !w-[340px] !hidden group-hover:!block`} >
                                        <li>
                                            <Link className='text-white' href={'/product/online-patient-care'}> Kiosk quản lý thanh toán không dùng tiền mặt </Link>
                                        </li>
                                        <li>
                                            <Link className='text-white' href={'/product/online-patient-care'}>Kiosk tự động phục vụ hành chính công</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className='text-white' href={'/product/online-patient-care'}>Giải pháp bảo mật cơ sở dữ liệu</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="/partner" className="hover:text-blue-700 transition duration-300 font-bold">
                                Công ty thành viên
                            </Link>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="/recruitment" className="hover:text-blue-700 transition duration-300 font-bold">
                                Thông tin tuyển dụng
                            </Link>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="/news" className="hover:text-blue-700 transition duration-300 font-bold">
                                Tin tức
                            </Link>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="/contact" className="hover:text-blue-700 transition duration-300 font-bold">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${style.togglerMenu} !hidden`}
                    onClick={toggleMenu}
                >
                    Menu
                </div>
            </div>
        </nav >

    )
}
