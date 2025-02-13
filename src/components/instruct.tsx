import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
export default function instruct() {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <div className='container w-full max-w-[1200px] m-auto'>
            <div className='mx-[-15px]'>
                <div className='m-auto relative min-h-0.5 px-4 w-[70%] float-left max-930:w-full'>
                    <h1 className='text-lg mb-12 font-bold'>
                        Dịch vụ sản phẩm tài liệu và hướng dẫn
                    </h1>
                    <p className='text-sm mb-5 font-medium'>
                        MobiFone Cloud Managed Service cung cấp công cụ giám sát 24/24 tài nguyên tải CPU, tải RAM, Disk IO, Network của toàn bộ các máy ảo mà khách hàng quản lý thông qua giao diện đồ họa. Hơn thế nữa, khách hàng có thể thiết lập các ngưỡng cảnh báo và nhận cảnh báo khi các tham số/tải vượt ngưỡng thông qua đa dạng các kênh như Email, SMS hoặc Telegram.
                    </p>
                    <div className='mt-12 mr-[-15px]'>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/file/OFFICIAL HỆ THỐNG KIOSK TỰ PHỤC NIAD  20.11.24 (1).pdf";
                                link.download = "OFFICIAL HỆ THỐNG KIOSK TỰ PHỤC NIAD  20.11.24 (1).pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download now
                        </button>
                        <button
                            className="bg-white hover:bg-slate-200 text-slate-500 font-bold py-2 px-4 rounded-full"
                            onClick={() => setShowVideo(true)}
                        >
                            video hướng dẫn
                        </button>
                        {showVideo && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full">
                                    {/* Nút đóng */}
                                    <button
                                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                        onClick={() => setShowVideo(false)}
                                    >
                                        ✖
                                    </button>

                                    {/* Video YouTube */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe width="560" height="315" className='w-full' src="https://www.youtube.com/embed/gYkK226G8z8?si=8Va8Nkz4CxaqYEZa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='text-center relative min-h-0.5 px-4 w-[30%] m-auto float-right max-930:w-full'>
                    <Image width={300} height={300} src={'/product/slider.png'} alt='' />
                </div>
            </div>
        </div>
    )
}
