import React from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";

export default function Partners() {
    return (
        <section className={`${style.partners} p-0`}>
            <div className={`${style.customers} max-w-[1170px] w-full m-auto`}>
                <div className={`${style.title} text-[40px] ml-[2px] mt-11`}>
                    <div className="flex w-[30%] h-[2.9px]">
                        <div className="flex-[4] bg-[#e91e1e]"></div>
                        <div className="flex-[6] bg-[#f8b133]"></div>
                    </div>
                    <h2 className="mt-4">
                        ĐỐI TÁC & KHÁCH HÀNG
                    </h2>
                </div>
                <div className={`${style.swiperContainer} mt-[30px] w-full h-full`}>
                    <div className={`${style.swiperWrapper}`} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                        <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                            <Image width={10000} height={60} className='!w-[60%]' src="/partners/Logo-hanh-chinh-cong.jpg" alt="partners 01" />
                        </div>
                        <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                            <Image width={10000} height={60} className='!w-[60%]' src="/partners/bo-y-te.png" alt="partners 02" />
                        </div>
                        <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                            <Image width={10000} height={60} src="/partners/logo-giao-duc-2.jpg" alt="partners 03" />
                        </div>
                        <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                            <Image width={10000} height={60} src="/partners/bidv-logo.png" alt="partners 04" />
                        </div>
                        <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                            <Image width={10000} height={60} src="/partners/niad-logo-2.jpg" alt="partners 05" />
                        </div>
                        <div className={`${style.swiperSlider} `} style={{ flex: '0 0 calc(80% / 6)' }}>
                            <Image width={1000} height={60} src="/partners/virtnam-post-logo.png" alt="partners 06" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
