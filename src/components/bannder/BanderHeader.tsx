import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '@/app/style/styles.module.css';

export default function BanderHeader() {
    const banerTop = [
        {
            id: 1,
            imageSrc1: '/banner/bic-giam-15-phi-bao-hiem-tnds-xe-may-tri-an-khach-hang-tai-tuc.jpg',
            imageSrc2: '/banner/song-dang-cap-tron-an-tam-cung-bic-smart-care.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 2,
            imageSrc1: '/banner/uu-dai-ron-rang-van-dam-binh-an.jpg',
            imageSrc2: '/banner/bic-giam-15-phi-bao-hiem-tnds-xe-may-tri-an-khach-hang-tai-tuc.jpg',
            imgAlt: 'Banner Top 2025',
        },
        {
            id: 3,
            imageSrc1: '/banner/song-dang-cap-tron-an-tam-cung-bic-smart-care.jpg',
            imageSrc2: '/banner/uu-dai-ron-rang-van-dam-binh-an.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 1,
            imageSrc1: '/banner/bic-giam-15-phi-bao-hiem-tnds-xe-may-tri-an-khach-hang-tai-tuc.jpg',
            imageSrc2: '/banner/song-dang-cap-tron-an-tam-cung-bic-smart-care.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 2,
            imageSrc1: '/banner/uu-dai-ron-rang-van-dam-binh-an.jpg',
            imageSrc2: '/banner/bic-giam-15-phi-bao-hiem-tnds-xe-may-tri-an-khach-hang-tai-tuc.jpg',
            imgAlt: 'Banner Top 2025',
        },
        {
            id: 3,
            imageSrc1: '/banner/song-dang-cap-tron-an-tam-cung-bic-smart-care.jpg',
            imageSrc2: '/banner/uu-dai-ron-rang-van-dam-binh-an.jpg',
            imgAlt: 'Global AI Summit',
        },
    ];

    const extendedBanners = [
        banerTop[banerTop.length - 1],
        ...banerTop,
        banerTop[0],
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(extendedBanners.length - 2);
            }, 100);
        } else if (currentIndex === extendedBanners.length - 1) {

            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 100);
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex, extendedBanners.length]);

    return (
        <header
            className={`${style.bannerHeader} bg-white overflow-hidden flex fixed top-0 left-0 w-full z-[999] h-[20%]`}
        >
            <div
                className="flex"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
                    width: `${extendedBanners.length * 100}%`,
                    alignItems: 'center'
                }}
            >
                {extendedBanners.map((banner, index) => (
                    <div
                        key={index}
                        className="relative w-full flex flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            className={`${style.bannerG} object-cover max-h-full h-[18vh] w-1/2 px-[1px] max-720:w-full`}
                            width={1000}
                            height={300}
                            src={banner.imageSrc1}
                            alt={banner.imgAlt}
                        />
                        <Image
                            className={`${style.bannerG} object-cover max-h-full h-[18vh] w-1/2 px-[1px] max-720:hidden`}
                            width={1000}
                            height={300}
                            src={banner.imageSrc2}
                            alt={banner.imgAlt}
                        />
                    </div>
                ))}
            </div>
        </header>
    );
}