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

    // Tạo mảng có phần tử clone
    const extendedBanners = [
        banerTop[banerTop.length - 1], // Clone phần tử cuối vào đầu
        ...banerTop,
        banerTop[0], // Clone phần tử đầu vào cuối
    ];

    const [currentIndex, setCurrentIndex] = useState(1); // Bắt đầu từ phần tử thực đầu tiên
    const [isTransitioning, setIsTransitioning] = useState(true); // Kiểm soát hiệu ứng chuyển động

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1); // Tăng index liên tục
        }, 3000); // Thời gian chuyển động slider (3 giây)

        return () => clearInterval(interval);
    }, []);

    // Xử lý logic vòng lặp
    useEffect(() => {
        if (currentIndex === 0) {
            // Khi đến phần tử clone đầu, nhảy ngay về phần tử thực cuối
            setTimeout(() => {
                setIsTransitioning(false); // Tắt hiệu ứng chuyển động
                setCurrentIndex(extendedBanners.length - 2); // Chuyển đến phần tử thực cuối
            }, 100); // Đồng bộ với thời gian animation
        } else if (currentIndex === extendedBanners.length - 1) {
            // Khi đến phần tử clone cuối, nhảy ngay về phần tử thực đầu
            setTimeout(() => {
                setIsTransitioning(false); // Tắt hiệu ứng chuyển động
                setCurrentIndex(1); // Chuyển đến phần tử thực đầu
            }, 100);
        } else {
            setIsTransitioning(true); // Bật lại hiệu ứng chuyển động
        }
    }, [currentIndex, extendedBanners.length]);

    return (
        <header
            className={`${style.bannerHeader} bg-white overflow-hidden flex fixed top-0 left-0 w-full z-[9999] h-[15%]`}
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
                        className="relative w-full flex-shrink-0 overflow-hidden px-2"
                    >
                        <Image
                            className={`${style.bannerG} object-cover max-h-full h-[14vh] w-full`}
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
