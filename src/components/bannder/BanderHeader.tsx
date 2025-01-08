import React from 'react'
import Image from "next/image";
import style from "@/app/style/styles.module.css";

export default function BanderHeader() {
    return (
        <header className={`${style.bannerHeader} bg-white flex flex-wrap items-center justify-center fixed top-0 left-0 w-full z-[9999] h-[15%] px-4 md:px-8 lg:px-16 shadow-md`}>
            <div className='flex-shrink-0'>
                <Image className={`${style.banerImg} object-cover max-h-[4.75rem] `} width={400} height={50} src={'/banner/Enterprise-IT-Pro_Logo_website2.jpg'} alt='banner' />
            </div>
            <div>
                <Image className={`${style.bannerG} ml-4 object-cover max-h-[4.75rem] w-[718px]`} width={400} height={50} src={'/banner/Global-AI-Summit-Banner.jpg'} alt='banner' />
            </div>
        </header>
    )
}
