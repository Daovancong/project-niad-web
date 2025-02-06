'use client';
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import style from "@/app/style/styles.module.css";
import Link from 'next/link';
export default function Blog() {

    const getActiveTab = () => {
        return localStorage.getItem("selectedTab") || "promotion";
    };

    const onTabClick = (tab: string) => {
        localStorage.setItem("selectedTab", tab);
        const tabs = document.querySelectorAll("li");
        tabs.forEach((tabElement) => tabElement.classList.remove(style.active));
        document.querySelector(`li[data-tab="${tab}"]`)?.classList.add(style.active);

        const blogSale = document.getElementById("blog-sale");
        const blogTechnology = document.getElementById("blog-technology");

        if (tab === "promotion") {
            if (blogSale) blogSale.style.cssText = "display: flex !important;";
            if (blogTechnology) blogTechnology.style.cssText = "display: none !important;";
        } else if (tab === "technology") {
            if (blogSale) blogSale.style.cssText = "display: none !important;";
            if (blogTechnology) blogTechnology.style.cssText = "display: flex !important;";
        }
    };

    useEffect(() => {
        const defaultTab = getActiveTab();
        document.querySelector(`li[data-tab="${defaultTab}"]`)?.classList.add(style.active);
        onTabClick(defaultTab);
    }, []);
    return (
        <section className={`${style.blog}`}>
            <div className={`${style.container} max-w-[1170px] w-full m-auto`}>
                <div className={`${style.title} text-[40px] ml-[2px] mt-10`}>
                    <div className="flex w-[20%] h-[2.9px]">
                        <div className="flex-[6] bg-[#e91e1e]"></div>
                        <div className="flex-[4] bg-[#f8b133]"></div>
                    </div>
                    <div className='relative px-12 mt-12 opacity-0 invisible'>
                        <div> CÔNG NGHÊ TIÊN PHONG </div>
                    </div>
                </div>
                <div className={`${style.firstBlog} flex items-center justify-between mt-5`} >
                    <div className={`${style.item} `}>
                        <p>
                            <strong>Đăng kí để nhận thông tin mới</strong>
                        </p>
                    </div>
                    <div className={`${style.item} `}>
                        <form action="">
                            <span>
                                <input type="email" placeholder="Email của bạn" required />
                            </span>
                            <button type="submit" name="btn">
                                Nhận tin tức
                                <Image className="ml-3" width={35} height={35} src="/icon/iconLeft.png" alt="...icon" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className={`${style.listBlog}`}>
                    <div className={`${style.nav} w-full mt-10`}>
                        <ul className="flex p-0 m-0 list-none justify-between border-b-2 border-customGray">
                            <li
                                style={{ width: "50%" }}
                                data-tab="promotion"
                                onClick={() => onTabClick("promotion")}
                            >
                                Tin tức
                            </li>
                            <li
                                style={{ width: "50%" }}
                                data-tab="technology"
                                onClick={() => onTabClick("technology")}
                            >
                                Blog
                            </li>
                        </ul>
                    </div>
                    <div id='blog-sale' className={`${style.proContent} mt-9 `}>
                        <div className={`${style.item}`}>
                            <article>
                                <div className={`${style.img}`}>
                                    <Link href={'#'}>
                                        <Image className={`${style.mobileImg}`} width={500} height={200} src="/sale/sale-happy-new-year.png" alt="sale" />
                                    </Link>
                                </div>
                                <div className={`${style.content}`}>
                                    <div className={`${style.date}`}>
                                        <span>
                                            23
                                        </span>
                                        <span className='text-xs text-white'>Jun 2024</span>
                                    </div>
                                    <h4> Cơ hội nhận ngay iphone 16 khi xác thực sinh trắc học </h4>
                                    <div className={`${style.meta}`}>
                                        <ul className='flex p-0 m-0 mt-[10px] list-none'>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                360
                                            </li>
                                            <li className='ml-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                                Admin
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.summary}`}>
                                        <p className='leading-[26px] text-justify overflow-hidden'>Với tổng giá trị giải thưởng lên đến hơn 4,7 tỷ đồng, MobiFone mang đến chương trình siêu khuyến mại “Vui tiêu dùng, rinh quà khủng"...</p>
                                    </div>
                                    <Link className={`${style.view}`} href={'#'}>
                                        Xem thêm
                                        <Image className='ml-[10px]' width={25} height={25} src="/icon/iconLeft.png" alt="" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                        <div className={`${style.item}`}>
                            <article>
                                <div className={`${style.img}`}>
                                    <Link className='flex' href={'#'}>
                                        <Image className='w-[480px]' width={380} height={380} src="/Sale/blog-sale-bidv-niad-26122024.png" alt="blog" />
                                    </Link>
                                </div>
                                <div className={`${style.content}`}>
                                    <div className={`${style.date} absolute left-[15px]`}>
                                        <span>
                                            24
                                        </span>
                                        <span className='text-xs text-white'>Sun 2024</span>
                                    </div>
                                    <h5> Nghe nhạc cực đã với các gói dât của mobifone </h5>
                                    <div className={`${style.meta}`}>
                                        <ul className='flex p-0 m-0 mt-[10px] list-none'>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                360
                                            </li>
                                            <li className='ml-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                                Admin
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.summary}`}>
                                        <p className='leading-[26px] text-justify overflow-hidden'>Spotity data đang là gói cước thu hút sự quan tâm của nhiều khách hàng trẻ. Phục vụ nhu cầu nghe nhạc trên nền tảng..</p>
                                    </div>
                                    <Link className={`${style.view}`} href={'#'}>
                                        Xem thêm
                                        <Image className='ml-[10px]' width={25} height={25} src="/icon/iconLeft.png" alt="" />
                                    </Link>
                                </div>
                            </article>
                            <article>
                                <div className={`${style.img}`}>
                                    <Link className='flex' href={'#'}>
                                        <Image className='w-[480px]' width={380} height={380} src="/Sale/blog-sale-bidv-niad-26122024.png" alt="blog" />
                                    </Link>
                                </div>
                                <div className={`${style.content}`}>
                                    <div className={`${style.date} absolute left-[15px]`}>
                                        <span>
                                            24
                                        </span>
                                        <span className='text-xs text-white'>Sun 2024</span>
                                    </div>
                                    <h5> Nghe nhạc cực đã với các gói dât của mobifone </h5>
                                    <div className={`${style.meta}`}>
                                        <ul className='flex p-0 m-0 mt-[10px] list-none'>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                360
                                            </li>
                                            <li className='ml-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                                Admin
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.summary}`}>
                                        <p className='leading-[26px] text-justify overflow-hidden'>Spotity data đang là gói cước thu hút sự quan tâm của nhiều khách hàng trẻ. Phục vụ nhu cầu nghe nhạc trên nền tảng..</p>
                                    </div>
                                    <Link className={`${style.view}`} href={'#'}>
                                        Xem thêm
                                        <Image className='ml-[10px]' width={25} height={25} src="/icon/iconLeft.png" alt="" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div id='blog-technology' className={`${style.proContent} mt-9 hidden`} style={{ display: "none" }} >
                        <div className={`${style.item}`}>
                            <article>
                                <div className={`${style.img}`}>
                                    <Link href={'#'}>
                                        <Image width={500} height={200} src="/sale/technology-blog-26122014.png" alt="technology" />
                                    </Link>
                                </div>
                                <div className={`${style.content}`}>
                                    <div className={`${style.date}`}>
                                        <span>
                                            23
                                        </span>
                                        <span className='text-xs text-white'>Jun 2024</span>
                                    </div>
                                    <h4> Chọn thuê VPS hay Shared hosting để lưu trữ? </h4>
                                    <div className={`${style.meta}`}>
                                        <ul className='flex p-0 m-0 mt-[10px] list-none'>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                360
                                            </li>
                                            <li className='ml-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                                Admin
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.summary}`}>
                                        <p className='leading-[26px] text-justify overflow-hidden'>Thuê VPS giá rẻ hay chọn Shared hosting để trở thành giải pháp tốt nhất cho doanh nghiệp trong việc tối ưu lưu trữ Web?.....</p>
                                    </div>
                                    <Link className={`${style.view}`} href={'#'}>
                                        Xem thêm
                                        <Image className='ml-[10px]' width={25} height={25} src="/icon/iconLeft.png" alt="" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                        <div className={`${style.item}`}>
                            <article>
                                <div className={`${style.img}`}>
                                    <Link className='flex' href={'#'}>
                                        <Image className='w-[480px]' width={380} height={380} src="/Sale/blog-sale-bidv-niad-26122024.png" alt="blog" />
                                    </Link>
                                </div>
                                <div className={`${style.content}`}>
                                    <div className={`${style.date} absolute left-[15px]`}>
                                        <span>
                                            24
                                        </span>
                                        <span className='text-xs text-white'>Sun 2024</span>
                                    </div>
                                    <h5> Nghe nhạc cực đã với các gói dât của mobifone </h5>
                                    <div className={`${style.meta}`}>
                                        <ul className='flex p-0 m-0 mt-[10px] list-none'>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                360
                                            </li>
                                            <li className='ml-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                                Admin
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.summary}`}>
                                        <p className='leading-[26px] text-justify overflow-hidden'>Spotity data đang là gói cước thu hút sự quan tâm của nhiều khách hàng trẻ. Phục vụ nhu cầu nghe nhạc trên nền tảng..</p>
                                    </div>
                                    <Link className={`${style.view}`} href={'#'}>
                                        Xem thêm
                                        <Image className='ml-[10px]' width={25} height={25} src="/icon/iconLeft.png" alt="" />
                                    </Link>
                                </div>
                            </article>
                            <article>
                                <div className={`${style.img}`}>
                                    <Link className='flex' href={'#'}>
                                        <Image className='w-[480px]' width={380} height={380} src="/Sale/blog-sale-bidv-niad-26122024.png" alt="blog" />
                                    </Link>
                                </div>
                                <div className={`${style.content}`}>
                                    <div className={`${style.date} absolute left-[15px]`}>
                                        <span>
                                            24
                                        </span>
                                        <span className='text-xs text-white'>Sun 2024</span>
                                    </div>
                                    <h5> Nghe nhạc cực đã với các gói dât của mobifone </h5>
                                    <div className={`${style.meta}`}>
                                        <ul className='flex p-0 m-0 mt-[10px] list-none'>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                360
                                            </li>
                                            <li className='ml-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-orange-400 mr-1">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                                Admin
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.summary}`}>
                                        <p className='leading-[26px] text-justify overflow-hidden'>Spotity data đang là gói cước thu hút sự quan tâm của nhiều khách hàng trẻ. Phục vụ nhu cầu nghe nhạc trên nền tảng..</p>
                                    </div>
                                    <Link className={`${style.view}`} href={'#'}>
                                        Xem thêm
                                        <Image className='ml-[10px]' width={25} height={25} src="/icon/iconLeft.png" alt="" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
