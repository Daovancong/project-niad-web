import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '@/app/style/styles.module.css';

export default function BanderHeader() {
    const banerTop = [
        {
            id: 1,
            imageSrc: '/banner/Global-AI-Summit-Banner.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 2,
            imageSrc: '/banner/banner-top-20012025.png',
            imgAlt: 'Banner Top 2025',
        },
        {
            id: 3,
            imageSrc: '/banner/Global-AI-Summit-Banner.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 4,
            imageSrc: '/banner/banner-top-20012025.png',
            imgAlt: 'Banner Top 2025',
        }, {
            id: 5,
            imageSrc: '/banner/Global-AI-Summit-Banner.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 6,
            imageSrc: '/banner/banner-top-20012025.png',
            imgAlt: 'Banner Top 2025',
        }, {
            id: 7,
            imageSrc: '/banner/Global-AI-Summit-Banner.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 8,
            imageSrc: '/banner/banner-top-20012025.png',
            imgAlt: 'Banner Top 2025',
        }, {
            id: 9,
            imageSrc: '/banner/Global-AI-Summit-Banner.jpg',
            imgAlt: 'Global AI Summit',
        },
        {
            id: 10,
            imageSrc: '/banner/banner-top-20012025.png',
            imgAlt: 'Banner Top 2025',
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
                        className="relative w-full flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            className={`${style.bannerG} object-cover max-h-full h-[18vh] w-full`}
                            width={800}
                            height={50}
                            src={banner.imageSrc}
                            alt={banner.imgAlt}
                        />
                    </div>
                ))}
            </div>
        </header>
    );
}
