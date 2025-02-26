import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "@/app/style/styles.module.css";
// https://bic.vn/index.html lấy 3 cái ở tin tức
export default function BannderLeft() {
    return (
        <aside className={`${style.banerLeft} w-[15%] top-[20vh] bg-gray-100 fixed left-0 h-[100vh] z-[99]`}>
            <div>
                <div className='p-2 !pt-0 mb-2'>
                    <Link href={'https://bic.vn/noi-dung/ban-tin-bic/2025-bic-vuon-minh-but-pha-huong-toi-ky-niem-20-nam-thanh-lap.html'}>
                        <Image className='w-full h-[20vh]' width={300} height={300} src="/banner/2025-bic-vuon-minh-but-pha-huong-toi-ky-niem-20-nam-thanh-lap.png" alt="image banner left" />
                        <div className='mt-3'>
                            <div className='text-sm text-gray-500 mb-2 max-1316:text-sx max-1083:text-[.9rem] max-800:text-[.6rem]'>18.02.2025</div>
                            <p className='text-ellipsis overflow-hidden text-base text-black max-1316:text-sm max-1083:text-xs max-800:text-[10px]'>
                                2025: BIC vươn mình bứt phá hướng tới kỷ niệm 20 năm thành lập.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='p-2 !pt-0'>
                    <Link href={'https://bic.vn/noi-dung/ban-tin-bic/bic-tang-phong-hoc-cho-truong-mam-non-binh-luong.html'}>
                        <Image className='w-full h-[20vh]' width={300} height={300} src="/banner/bic-tang-phong-hoc-cho-truong-mam-non-binh-luong.png" alt="image banner left" />
                    </Link>
                    <div className='mt-3'>
                        <div className='text-sm text-gray-500 mb-2 max-1316:text-sx max-1083:text-[.9rem] max-800:text-[.6rem]'>23.01.2025</div>
                        <p className='text-ellipsis overflow-hidden text-base text-black max-1316:text-sm max-1083:text-xs max-800:text-[10px]'>
                            BIC tặng phòng học cho trường Mầm non Bình Lương
                        </p>
                    </div>
                </div>
            </div>
        </aside >
    )
}
