'use client';
import React, { useState } from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";
import Link from 'next/link';
export default function Contact() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState("");
    // Gửi OTP đến email
    const sendOtp = async () => {
        setMessage("");
        try {
            const res = await fetch("/api/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (res.ok) {
                setOtpSent(true);
                setMessage("OTP đã được gửi!");
            } else {
                setMessage(data.error);
            }
        } catch (error) {
            setMessage("Lỗi khi gửi OTP!");
        }
    };
    // Xác thực OTP
    const verifyOtp = async () => {
        setMessage("");
        try {
            const res = await fetch("/api/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("OTP hợp lệ!");
            } else {
                setMessage(data.error);
            }
        } catch (error) {
            setMessage("Lỗi khi xác thực OTP!");
        }
    };
    return (
        <section className={`${style.contact} py-[1.125rem] overflow-hidden relative`}>
            <div className={`${style.container} max-w-[1170px] w-full !ml-[38px]`}>
                <div className={`${style.title} text-[40px] ml-[2px] mt-10`}>
                    <div className="flex w-[20%] h-[2.9px]">
                        <div className="flex-[5] bg-[#e91e1e]"></div>
                        <div className="flex-[5] bg-[#f8b133]"></div>
                    </div>
                    <h2 className="mt-4"> LIÊN HỆ VỚI CHÚNG TÔI </h2>
                </div>
                <div className={`${style.form} relative`}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <ul className='space-y-4'>
                            <li> <input type="text" placeholder="Họ Và Tên(*)" required /> </li>
                            <li> <input type="text" placeholder="Số điện thoại(*)" maxLength={10} required /> </li>
                            <li>
                                <input type="email" placeholder="Email(*)" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <button type="button" onClick={sendOtp} className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">
                                    Gửi OTP
                                </button>
                            </li>
                            <li> <input type="text" placeholder="Nội dung" /> </li>
                            {otpSent && (
                                <li>
                                    <input
                                        type="text"
                                        placeholder="Nhập mã OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                    <button type="button" onClick={verifyOtp} className="ml-2 bg-green-500 text-white px-2 py-1 rounded">
                                        Xác thực
                                    </button>
                                </li>
                            )}
                            <li><p className="text-red-500">{message}</p></li>

                            <li className="flex items-center justify-between">
                                <div className={`${style.item}`}>
                                    <button type="submit" className={`${style.view}`}>
                                        Nhận tư vấn
                                        <Image className="ml-4" width={30} height={30} src="/icon/iconLeft-witth.png" alt="tu van" />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </form>
                    {/* hotline */}
                    <div className={`${style.hotline} w-[360px] absolute right-[-130px] top-[-125px] bg-white p-4 shadow-md rounded-md border border-gray-200`}>
                        <h3 className="text-[16px] font-semibold text-gray-700 mb-1">Hotline</h3>
                        <h2 className="text-[28px] font-bold text-blue-600 mb-2">
                            (+84) 931.101.101
                        </h2>
                        <p className="text-[14px] text-gray-600 leading-5">
                            TỔNG CÔNG TY VIỄN THÔNG MOBIFONE
                        </p>
                        <p>
                            Số 01 Phạm Văn Bạch, Yên Hoà, Cầu Giấy, Hà Nội
                        </p>
                        <Link
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex no-underline text-[14px] items-center text-blue-500 mt-2"
                        >
                            <Image width={50} height={50} src="/vitri-niad.png" alt="" className="mr-2" />
                            Xem trên Google Map
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
