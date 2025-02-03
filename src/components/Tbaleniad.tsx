import React from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";
import Link from 'next/link';

export default function Tbaleniad() {
    return (
        <section className={`${style.tbaleNiad} !p-0 w-full`}>
            <div className={`${style.containeTb} max-w-[1170px]`}>
                <div className={`${style.listTb} flex mr-[23px]`}>
                    <div className={`${style.item}`}>
                        <div className={`${style.in}`}>
                            <div className={`${style.hot}`}>
                                <span>hot</span>
                            </div>
                            <div className={`${style.img}`}>
                                <Image width={80} height={80} src="/product/procut_01.png" alt="product" />
                            </div>
                            <div className={`${style.detail}`}>
                                <form action="">
                                    <h4> Product 01 </h4>
                                    <ul className="m-0 p-0 lists">
                                        <li>CPU: Intel® Xeon® E5-26XX</li>
                                        <li>CORE: 4 cores</li>
                                        <li>HDD: 100GB</li>
                                        <li>RAM: 4GB</li>
                                        <li>IP: 01</li>
                                    </ul>
                                    <div className={`${style.gia}`}>
                                        <span>770.000 ₫</span>
                                        <Image className="ml-3" width={30} height={30} src="/icon/iconLeft.png" alt="gia" />
                                    </div>
                                    <Link className={`${style.viewGia}`} href="#">
                                        <span className="ml-[50px]">Đặt mua</span>
                                        <Image className="ml-3" width={28} height={28} src="/icon/iconLeft-witth.png" alt="gia" />
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.item}`}>
                        <div className={`${style.in}`}>
                            <div className={`${style.hot}`}>
                                <span>hot</span>
                            </div>
                            <div className={`${style.img}`}>
                                <Image width={80} height={80} src="/product/procut_01.png" alt="product" />
                            </div>
                            <div className={`${style.detail}`}>
                                <form action="">
                                    <h4> Product 02 </h4>
                                    <ul className="m-0 p-0 lists">
                                        <li>CPU: Intel® Xeon® E5-26XX</li>
                                        <li>CORE: 4 cores</li>
                                        <li>HDD: 100GB</li>
                                        <li>RAM: 4GB</li>
                                        <li>IP: 01</li>
                                    </ul>
                                    <div className={`${style.gia}`}>
                                        <span>770.000 ₫</span>
                                        <Image className="ml-3" width={30} height={30} src="/icon/iconLeft.png" alt="gia" />
                                    </div>
                                    <Link className={`${style.viewGia}`} href="#">
                                        <span className="ml-[50px]">Đặt mua</span>
                                        <Image className="ml-3" width={28} height={28} src="/icon/iconLeft-witth.png" alt="gia" />
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.item}`}>
                        <div className={`${style.in}`}>
                            <div className={`${style.hot}`}>
                                <span>hot</span>
                            </div>
                            <div className={`${style.img}`}>
                                <Image width={80} height={80} src="/product/procut_01.png" alt="product" />
                            </div>
                            <div className={`${style.detail}`}>
                                <form action="">
                                    <h4> Product 03 </h4>
                                    <ul className="m-0 p-0 lists">
                                        <li>CPU: Intel® Xeon® E5-26XX</li>
                                        <li>CORE: 4 cores</li>
                                        <li>HDD: 100GB</li>
                                        <li>RAM: 4GB</li>
                                        <li>IP: 01</li>
                                    </ul>
                                    <div className={`${style.gia}`}>
                                        <span>770.000 ₫</span>
                                        <Image className="ml-3" width={30} height={30} src="/icon/iconLeft.png" alt="gia" />
                                    </div>
                                    <Link className={`${style.viewGia}`} href="#">
                                        <span className="ml-[50px]">Đặt mua</span>
                                        <Image className="ml-3" width={28} height={28} src="/icon/iconLeft-witth.png" alt="gia" />
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.infoTb} w-[291px]`}>
                    <div className="text-[40px] ml-[2px] mt-12">
                        <div className={`${style.mobile} flex w-[55%] h-[3.9px]`}>
                            <div className="flex-[3] bg-[#e91e1e]"></div>
                            <div className="flex-[7] bg-[#f8b133]"></div>
                        </div>
                        <h3 className="mt-3">
                            Gói dịch vụ
                        </h3>
                    </div>
                    <p className="!leading-[26px] text-justify"> Hệ thống cung cấp dịch vụ Cloud của Niad được được xây dựng và phát triển trên nền tảng điện toán đám mây OpenStack.
                        Đây là giải pháp được rất nhiều hãng công nghệ hàng đầu trên thế giới sử dụng để cung cấp hạ tầng về máy chủ.
                    </p>
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6 mr-4"
                                style={{ color: '#7FB3D5' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Cam kết uptime 99.99%
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6 mr-4"
                                style={{ color: '#7FB3D5' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            khởi tạo nhanh, dễ dàng nâng cấp
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6 mr-4"
                                style={{ color: '#7FB3D5' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            An toàn và bảo mật dữ liệu
                        </li>
                    </ul>
                    <Link className={`${style.view} w-[196px] h-[45.9px] flex items-center justify-center`} href="#">
                        <span className="ml-[50px]">
                            xem tất cả
                        </span>
                        <Image className="ml-[0.75rem]" width={30} height={30} src="/icon/iconLeft-witth.png" alt="xem tat ca" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
