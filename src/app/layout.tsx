"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./globals.css";
import BanderHeader from "@/components/bannder/BanderHeader";
import BannderLeft from "@/components/bannder/BannderLeft";
import BannderRight from "@/components/bannder/BannderRight";
import Loading from "@/app/ui/loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const getMetadata = (path: string) => {
    if (path === "/") {
      return {
        title: "Trang Chủ - NiDA Giải Pháp Kiosk Y Tế Thông Minh",
        description: "CTCP Đầu Tư Và Phát Triển Ngân Lực",
      };
    }
    if (path === "/introduce") {
      return {
        title: "Giới Thiệu - NiDA Giải Pháp Kiosk Y Tế Thông Minh",
        description: "Tìm hiểu về các giải pháp y tế thông minh của chúng tôi.",
      };
    }

    return {
      title: "NiDA Giải Pháp Kiosk Y Tế Thông Minh",
      description: "CTCP Đầu Tư Và Phát Triển Ngân Lực",
    };
  };
  const metadata = getMetadata(pathname);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col h-screen">
            <BanderHeader />
            <div className="flex relative justify-between z-50">
              <BannderLeft />
              {children}
              <BannderRight />
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
