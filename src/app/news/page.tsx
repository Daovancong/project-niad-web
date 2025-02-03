'use client';
import React from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";


export default function news() {
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] mt-[105.5px] flex flex-col shadow-md`}>
            <Navigation />
            <section className={`${style.slider} py-[1.125rem] overflow-hidden relative"`}>
                <div className={`${style.niadContainer} w-full h-full relative overflow-hidden list-none p-0 z-[1]`}>
                    <div className={`${style.niadWar} relative`}
                    // style={{ transform: "translate3d(-1077px, 0px, 0px)", transition: "0ms" }}
                    >
                        <div className={`${style.niadSlider} text-center text-[18px] flex justify-center items-center`}>
                            <Image
                                className="w-full h-[520px]"
                                src="/banner/NIAD-ai-banner-hitech-ctcp-dau-tu-va-phat-trien-ngan-luc.jpg"
                                alt="Banner description"
                                width={600}
                                height={100}
                            />
                            <div className={`${style.info} absolute flex top-0 left-0 text-center w-full h-full`}>
                                <div className="w-full mt-[-100px]">
                                    <div className={`${style.container} px-6`}>
                                        <h2 className={`${style.textOnBanner} text-[48px] font-bold mt-0 text-left pt-7`}>
                                            Máy chủ ảo vpn
                                            <br />
                                            CLOUD SERVER
                                        </h2>
                                        <p className={`${style.textOnBanner} leading-[26px] text-justify mt-3`}>
                                            Dịch vụ máy chủ ảo VPS/ Cloud Server cho phép bạn thiết lập hạ tầng điện toán có quy mô từ một máy chủ ảo riêng lẻ đến hệ thống có hàng trăm máy chủ với công nghệ ảo hóa vượt trội nhất
                                        </p>
                                        <form action="" className={`${style.formAdvisory} flex text-center mt-5`}>
                                            <input
                                                type="email"
                                                placeholder="Email của bạn"
                                            />
                                            <button type="submit" name="sub" className={`${style.btnAdvise} flex w-[159.4px] h-[47.89px] rounded-[23px] ml-3 text-left items-center justify-center hover:bg-[#CE0101]`}>
                                                Nhận tư vấn
                                                <Image
                                                    className="ml-[10px] mr-[-8px] max-w-full"
                                                    width={36}
                                                    height={36}
                                                    src={'/icon/iconLeft.png'}
                                                    alt="iconLeft"
                                                />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.niadSliders} text-center text-[18px] bg-[#fff] items-center justify-center`}>
                            <Image
                                width={1000}
                                height={400}
                                src="/banner/technology-face-circuit-diagram-background_1017-18300.avif"
                                alt="Banner description"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Blog />
            <Footer />
        </main>
    )
}
