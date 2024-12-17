import React from 'react'
import Image from "next/image";

export default function BanderHeader() {
    return (
        <header className='bannerHeader h-[15%] bg-[#fff] relative flex items-center justify-center'>
            <div className='p-[10px]'>

                <Image width={400} height={50} src={'/banner/Enterprise-IT-Pro_Logo_website2.jpg'} alt='banner' />

            </div>
            <div className='p-[10px]'>

                <Image className='ml-4 h-[5.75rem] w-[718px]' width={400} height={50} src={'/banner/Global-AI-Summit-Banner.jpg'} alt='banner' />

            </div>
        </header>
    )
}
