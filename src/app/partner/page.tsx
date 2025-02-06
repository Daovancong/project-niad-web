'use client';
import React from 'react';
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import BannerSlider from '@/components/BannerSlider';
export default function partner() {
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[15.5vh] flex flex-col shadow-md`}>
            <Navigation />
            <BannerSlider />
            <Partners />
            <Footer />
        </main>
    )
}
