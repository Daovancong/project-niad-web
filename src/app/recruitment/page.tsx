'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import Footer from "@/components/Footer";
import BannerSlider from '@/components/BannerSlider';
export default function recruitment() {
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] mt-[105.5px] flex flex-col shadow-md`}>
            <Navigation />
            <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] mt-[105.5px] flex flex-col shadow-md`}>
                <section className={`${style.mainIntro} py-[3.125rem]`}>
                    <h1 className='text-4xl opacity-50'>
                        Hiện Chưa Có Thông Tin Tuyển Dụng
                    </h1>
                </section>
            </main>
            <Footer />
        </main>
    )
}
