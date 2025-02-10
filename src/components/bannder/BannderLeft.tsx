import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function BannderLeft() {
    return (
        <aside className='w-[15%] top-[15%] bg-gray-100 fixed left-0 h-[100vh] z-[99]'>
            <div>
                <div className='p-2 !pt-0'>
                    <Link href={'#'}>
                        <Image className='w-full h-[27.5vh]' width={700} height={50} src="/banner/baner-left01.png" alt="image banner left" />
                        <div>
                            {/* <h1 className='font-bold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nihil? Sed, voluptatum!
                        </h1> */}
                        </div>
                    </Link>

                </div>
                <div className='p-2 !pt-0'>
                    <Image className='w-full h-[27.5vh]' width={700} height={70} src="/banner/baner-left2.png" alt="image banner left" />
                </div>
                <div className='p-2 !pt-0'>
                    <Image className='w-full h-[27.5vh]' width={700} height={70} src="/banner/baner-left01.png" alt="image banner left" />
                </div>
            </div>
        </aside>
    )
}
