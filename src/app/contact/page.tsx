'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
// import Captcha from '@/components/Captcha';


export default function contact() {
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[15.5vh] flex flex-col shadow-md`}>
            <Navigation />
            <div className={`${style.contactPage}`}>
                <div className={`${style.container} px-5`}>
                    <h3> TỔNG CÔNG TY CP VÀ DT NGÂN LỰC </h3>
                    <ul className=''>
                        <li className='w-[41%]'>
                            <div className={`${style.img}`}>
                                <Image
                                    src={'/contact/loacll-icon.png'}
                                    width={30}
                                    height={30}
                                    alt='logo'
                                />
                            </div>
                            <div className={`${style.contInfo}`}>
                                <div className={`${style.title}`}>
                                    Địa chỉ
                                </div>
                                <p>Số 263, Đường Cầu Giấy,P.Dịch Vọng,Q.Cầu Giấy,Hà Nội</p>
                            </div>
                        </li>
                        <li className='w-[27.5%]'>
                            <div className={`${style.img}`}>
                                <Image
                                    src={'/contact/phone-ringing-icon.png'}
                                    width={30}
                                    height={30}
                                    alt='logo'
                                />
                            </div>
                            <div className={`${style.contInfo}`}>
                                <div className={`${style.title}`}>
                                    Địên thoại
                                </div>
                                <p>(84+) 988176899</p>
                            </div>
                        </li>
                        <li className='w-[30.5%]'>
                            <div className={`${style.img}`}>
                                <Image
                                    src={'/contact/send-icon.png'}
                                    width={30}
                                    height={30}
                                    alt='logo'
                                />
                            </div>
                            <div className={`${style.contInfo}`}>
                                <div className={`${style.title}`}>
                                    Mail
                                </div>
                                <p> hotro@nganluc.vn</p>
                            </div>
                        </li>
                    </ul>
                    <div className={`${style.map} relative overflow-hidden h-full m-0 p-0 pb-5`}>
                        <div className='h-full w-full top-0 left-0 flex justify-center'>
                            <Link
                                href={'https://www.google.com/maps/place/BIDV+C%E1%BA%A7u+Gi%E1%BA%A5y/@21.0341494,105.7933712,16z/data=!4m14!1m7!3m6!1s0x3135ab47bd99568d:0x795771a5661f8b96!2zQklEViBD4bqndSBHaeG6pXk!8m2!3d21.0341701!4d105.7956325!16s%2Fg%2F1tdxbrpq!3m5!1s0x3135ab47bd99568d:0x795771a5661f8b96!8m2!3d21.0341701!4d105.7956325!16s%2Fg%2F1tdxbrpq?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image className='w-[870px]' width={500} height={500} src={'/map_vitri_cty.png'} alt='c' />
                            </Link>
                        </div>
                    </div>
                    <div className={`${style.contactUs} pb-16`}>
                        <h3 className='text-[32px]'>Liên hệ với chúng tôi</h3>
                        <div className={`${style.form}`}>
                            <form className='w-full' action="">
                                <ul className='flex w-full flex-wrap mb-0'>
                                    <li>
                                        <label>Họ Và Tên</label>
                                        <input
                                            type="text"
                                            name="FullName"
                                            className={`${style.formControl}`}
                                        />
                                    </li>
                                    <li>
                                        <label>Số Điện Thoại</label>
                                        <input
                                            type="number"
                                            name="FullName"
                                            className={`${style.formControl}`}
                                        />
                                    </li>
                                    <li>
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="FullName"
                                            className={`${style.formControl}`}
                                        />
                                    </li>
                                    <li>
                                        <label>Nội Dung</label>
                                        <textarea name="content"></textarea>
                                    </li>
                                    <li>
                                        <label>Mã Xác Thực</label>
                                        <input
                                            type="text"
                                            name="FullName"
                                            className={`${style.formControl}`}
                                        />
                                    </li>
                                    <li className='w-auto pt-7'>
                                        {/* <Captcha /> */}
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    )
}
