import React from 'react'
import Image from "next/image";

export default function BannderLeft() {
    return (
        <aside className='w-[15%] bg-gray-100 flex items-center justify-center mt-[97.5px] fixed left-0 h-[85%] z-[99]'>
            <div className='p-2'>
                <Image className='w-full h-[559px]' width={700} height={70} src="/freepik__adjust__54091.png" alt="image banner left" />
            </div>
        </aside>
    )
}
