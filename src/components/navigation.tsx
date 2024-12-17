import Link from 'next/link'
import React from 'react'

export default function Navigation() {
    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-[99]">
            <div className="flex items-center justify-between w-[98%] mx-auto py-2">
                <Link href="/">
                    <img
                        className="h-16"
                        src="/logo.png"
                        alt="Logo"

                    />
                </Link>
                <ul className="flex space-x-6 text-blue-500 font-medium text-sm whitespace-nowrap">
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Giới thiệu
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Dịch vụ
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Bảng giá
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Tin tức
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Tài liệu
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Câu hỏi thường gặp
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Hướng dẫn sử dụng
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition duration-300 font-bold">
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
