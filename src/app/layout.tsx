import type { Metadata } from "next";
import "./globals.css";
import BanderHeader from '@/components/bannder/BanderHeader';
import style from "@/app/style/styles.module.css";
import BannderLeft from "@/components/bannder/BannderLeft";
import BannderRight from "@/components/bannder/BannderRight";


export const metadata: Metadata = {
  title: "Trang Chủ - NiDA Giải Pháp Kiosk Y Tế Thông Minh",
  description: "CTCP Đầu Tư Và Phát Triển Ngân Lực",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased`">
        <div className="flex flex-col h-screen">
          <BanderHeader />

          <div className="flex relative justify-between z-50">
            <BannderLeft />

            {children}

            <BannderRight />
          </div>
        </div>

      </body>
    </html>
  );
}
