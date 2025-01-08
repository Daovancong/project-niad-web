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
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${style.menuMain} ${menuVisible ? "!block" : ""
                        } transition-all duration-500 ease-in-out`}
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
                                    <Link className='text-white' href={'#'}>Cơ cấu tổ chức</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'#'}>Giá trị cốt lõi</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'#'}>Đối tác/Khách hàng</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                                Sản phẩm
                            </Link>
                            <ul className={`${style.subMenu} z-[99999] !w-[300px]`}>
                                <li>
                                    <Link className='text-white' href={'#'}> (AI) Trong hệ thống quản trị </Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'#'}>phần mềm quản trị bệnh viện</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'#'}>phần mềm quản lý thiết bị y tế</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'#'}>Phần mềm quản lý bệnh nhân</Link>
                                </li>
                                <li>
                                    <Link className='text-white' href={'#'}>Phần mềm đăng ký khám online</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                                Công ty thành viên
                            </Link>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                                Thông tin tuyển dụng
                            </Link>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                                Tin tức
                            </Link>
                        </li>
                        <li className='pb-7 pt-7 cursor-pointer'>
                            <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${style.togglerMenu}`}
                    onClick={toggleMenu}
                >
                    Menu
                </div>
            </div>
        </nav>

    )
}
