import React from 'react'
import Image from "next/image";
import Link from "next/link";


export default function BannderRight() {
    return (
        <aside className='w-[15%] bg-gray-100 mt-[97.5px] fixed right-0 h-[85%] z-[999]'>
            <div className='p-2 !pt-0'>
                <Link href={'#'}>
                    <Image className='w-full h-44' width={700} height={70} src="/banner/baner-left01.png" alt="image banner left" />
                    <div>
                    </div>
                </Link>

            </div>
            <div className='p-2 !pt-0'>
                <Image className='w-full h-44' width={700} height={70} src="/banner/baner-left01.png" alt="image banner left" />
            </div>
            <div className='p-2 !pt-0'>
                <Image className='w-full h-44' width={700} height={70} src="/banner/baner-left01.png" alt="image banner left" />
            </div>
        </aside>
    )
}
