'use client';
import React, { useState, useEffect, useRef } from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import Footer from "@/components/Footer";
import BannerSlider from '@/components/BannerSlider';
import Link from "next/link";

export default function recruitment() {
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(true);
    };
    const handleClickOf = () => {
        setShowForm(false);
    };
    useEffect(() => {
        if (showForm) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showForm]);

    const UploadCV = () => {
        const fileInputRef = useRef<HTMLInputElement | null>(null);

        const handleClick = () => {
            if (fileInputRef.current) {
                fileInputRef.current.click();
            }
        };

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];

            if (file) {
                const allowedTypes = ["pdf", "doc", "png", "jpeg", "jpg"];
                const fileExtension = file.name.split(".").pop()?.toLowerCase();

                if (!fileExtension || !allowedTypes.includes(fileExtension)) {
                    alert("Vui lòng chọn file đúng định dạng: .pdf, .doc, .png, .jpeg, .jpg");
                    return;
                }

                alert(`Bạn đã chọn file: ${file.name}`);
                // TODO: Xử lý upload file lên server nếu cần
            }
        };
    }
    const reacuitments = [
        {
            id: 1,
            location: ' Intern Front End',
            wage: 'Thỏa thuận',
            address: 'Hà Nội',
            time: ' Hạn hồ sơ 28/02/2025',
        },
        {
            id: 2,
            location: 'Intern Back End',
            wage: 'Thỏa thuận',
            address: 'Hà Nội',
            time: ' Hạn hồ sơ 28/02/2025',
        },
        {
            id: 3,
            location: 'Intern Ai (Python)',
            wage: 'Thỏa thuận',
            address: 'Hà Nội',
            time: ' Hạn hồ sơ 28/02/2025',
        }
    ];
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
            <BannerSlider />
            <section className={`py-[3.125rem]`}>
                <div className='w-full px-4 mx-auto'>
                    <div className='flex items-center justify-center flex-col flex-grow'>
                        <h2 className='text-black text-[32px] font-bold text-center uppercase'>
                            CƠ HỘI NGHỀ NGHIỆP
                        </h2>
                        <span className='bg-[#db0d0d] w-20 h-1 mt-2 mb-6'></span>
                    </div>
                </div>
                <div className={`${style.container} w-full px-7 py-4 mx-auto`}>
                    <div className='justify-center flex flex-wrap'>
                        {reacuitments.map(recruitment => (
                            <div key={recruitment.id} className='p-6 mb-4 cursor-default w-full mx-auto' style={{ borderBottom: '1px solid #e0e0e0' }}>
                                <div className='flex flex-wrap'>
                                    <div className='pl-0 flex-col flex flex-grow relative pr-4 w-1/2'>
                                        <div>
                                            <Link href={'#'} className='font-[700] no-underline '>
                                                {recruitment.location}
                                            </Link>
                                        </div>
                                        <div className='flex flex-col pt-2'>
                                            <div className='pr-2 pt-3 flex flex-col '>
                                                <div className='flex flex-row'>
                                                    <span className='inline-block w-6 h-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-red-500 ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                                        {recruitment.wage}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='pr-2 pt-3 flex flex-col '>
                                                <div className='flex flex-row'>
                                                    <span className='inline-block w-6 h-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-black ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                                        {recruitment.address}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='pr-2 pt-3 flex flex-col '>
                                                <div className='flex flex-row'>
                                                    <span className='inline-block w-6 h-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-black ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                                        {recruitment.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='justify-center flex-col flex '>
                                        <button
                                            className='w-full block no-underline p-3 my-auto text-white text-center whitespace-nowrap' style={{ background: '#2690eb', maxWidth: '200px', minWidth: '100px', borderRadius: '24px' }}
                                            onClick={handleClick}
                                        >
                                            Ứng tuyển
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div id='bgForm' className={`${showForm ? "!block" : "hidden"} fixed top-[0] left-0 w-full h-full bg-[#000000] opacity-50 z-[9999]`}></div>
            <section id='formUT' className={`${showForm ? "!flex" : "hidden"} h-[95%] top-[150px] w-[600px] border-t-4 border-solid border-[#2680eb] min-h-48 max-h-[74%] fixed left-1/2 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,.16)] overflow-y-hidden z-[99999] p-6 flex-col`} style={{ transform: 'translateX(-50%)' }}>
                <div className='flex absolute w-[calc(100%-48px)] justify-between'>
                    <div className='text-base font-bold absolute'> Nộp hồ sơ </div>
                    <div className='absolute top-0 right-2 cursor-pointer' onClick={handleClickOf}> X </div>
                </div>
                <div className='mt-8 overflow-y-auto overflow-x-hidden max-h-full flex-[1]'>
                    <div className='w-[98%] h-auto'>
                        <div className='w-full mb-4'>
                            <div className='flex'>
                                <label htmlFor="cvUpload" className='mb-2'>CV/Sơ yếu lí lịch</label>
                                <span className='text-red-500 ml-1'>*</span>
                            </div>
                            <div className="w-full">
                                <div id="CV" onClick={handleClick}>
                                    <div className="h-full relative text-center items-center border-[1px] border-dashed border-[#2970f6] bg-clip-padding cursor-pointer p-5">
                                        <div className="text-[#2680eb] mt-5">Tải lên CV/Sơ yếu lí lịch của bạn</div>
                                        <div className="text-[#9e9e9e]">Chấp nhận định dạng <strong>.pdf, .doc, .png, .jpeg, .jpg</strong></div>
                                        <input
                                            type="file"
                                            // ref={fileInputRef}
                                            // className="hidden"
                                            // accept=".pdf, .doc, .png, .jpeg, .jpg"
                                            // onChange={handleFileChange}
                                        />
                                        <div className="mt-10"></div>
                                    </div>
                                </div>
                            </div>
                            <span className='hidden text-red-500'> Không được để trống phần này</span>
                        </div>
                        <div className='w-full mb-4'>
                            <div className='flex'>
                                <label className='mb-2'> Họ và tên </label>
                                <span className='text-red-500 ml-1'>*</span>
                            </div>
                            <div className='w-full'>
                                <input type="text" className='w-full h-10 rounded border-[1px] border-solid border-[#e0e0e0] px-4' style={{ outline: 'none' }} required />
                            </div>
                        </div>
                        <div className='w-full mb-4'>
                            <div className='flex'>
                                <label className='mb-2'>Email</label>
                                <span className='text-red-500 ml-1'>*</span>
                            </div>
                            <div className='w-full'>
                                <input type="email" className='w-full h-10 rounded border-[1px] border-solid border-[#e0e0e0] px-4' style={{ outline: 'none' }} required />
                            </div>
                        </div>
                        <div className='w-full mb-4'>
                            <div className='flex'>
                                <label className='mb-2'>Số điện thoại</label>
                                <span className='text-red-500 ml-1'>*</span>
                            </div>
                            <div className='w-full'>
                                <input type="tel" className='w-full h-10 rounded border-[1px] border-solid border-[#e0e0e0] px-4' style={{ outline: 'none' }} required />
                            </div>
                        </div>
                        {/* <div className='w-full mb-4'></div> */}
                    </div>
                </div>
                <button className='h-[40px] bg-[#2690eb] leading-[40px] text-center my-4 mx-auto rounded cursor-pointer text-[#ffffff] w-full'>
                    Nộp hồ sơ
                </button>
            </section>
            <Footer />
        </main>
    )
}
