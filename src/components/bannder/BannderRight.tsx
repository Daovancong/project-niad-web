import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "@/app/style/styles.module.css";
// https://bic.vn/dmsp-cn/bao-hiem-ca-nhan.html lấy 3 cái ảnh đầu tiên
export default function BannderRight() {
    return (
        <aside className={`${style.banerRight} w-[15%] top-[20vh] bg-gray-100 fixed right-0 h-[85%] z-[999]`}>
            <div>
                <div className='p-2 !pt-0 mb-2'>
                    <Link href={'#'}>
                        <Image className='w-full h-[20vh]' width={700} height={70} src="/banner/bic-smart-care-bao-hiem-suc-khoe-cao-cap.jpg" alt="image banner left" />
                        <div className='mt-3'>
                            <div className='text-sm text-gray-500 mb-2'>18.02.2025</div>
                            <p className='text-ellipsis overflow-hidden text-base text-black'>
                                BIC Smart Care - Bảo hiểm sức khỏe cao cấp - Sống đẳng cấp, trịn an tâm
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='p-2 !pt-0'>
                    <Link href={'#'}>
                        <Image className='w-full h-[20vh]' width={700} height={70} src="/banner/bao-hiem-y-te-bo-tro.jpg" alt="image banner left" />
                        <div className='mt-3'>
                            <div className='text-sm text-gray-500 mb-2'>18.02.2025</div>
                            <p className='text-ellipsis overflow-hidden text-base text-black'>
                                Bảo hiểm y tế hỗ trợ - Gạt bỏ lo âu, an âm điều trị
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
