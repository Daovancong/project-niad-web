"use client";
import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect } from "react";
import "./globals.css";
import BanderHeader from "@/components/bannder/BanderHeader";
import BannderLeft from "@/components/bannder/BannderLeft";
import BannderRight from "@/components/bannder/BannderRight";
import Loading from "@/app/ui/loading";
import Script from 'next/script';

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
        title: "Trang Chủ - Medtecha.vn Giải Pháp Kiosk Y Tế Thông Minh",
        description: "CTY công nghệ Pharmacy Việt Nam",
      };
    }
    if (path === "/product") {
      return {
        title: "Sản phẩm Ai trong hệ thống quản trị - Medtecha.vn Giải Pháp Kiosk Y Tế Thông Minh",
        description: "CTY công nghệ Pharmacy Việt Nam",
      };
    }
    if (path === "/introduce") {
      return {
        title: "Giới Thiệu - Medtecha.vn Giải Pháp Kiosk Y Tế Thông Minh",
        description: "Tìm hiểu về các giải pháp y tế thông minh của chúng tôi.",
      };
    }
    if (path === "/introduce/structure") {
      return {
        title: "Cơ cấu tổ chức - Medtecha.vn Giải Pháp Kiosk Y Tế Thông Minh",
        description: "Xem cấu trúc của giải pháp y tế thông minh của chúng tôi.",
      };
    }
    const commonMeta = {
      title: "Giới Thiệu - Medtecha.vn Giải Pháp Kiosk Y Tế Thông Minh",
      description: "Tìm hiểu về các giải pháp y tế thông minh của chúng tôi.",
    };

    const validPaths = [
      "/introduce/structure",
      "/introduce/corevalues",
      "/introduce/partandcust"
    ];
    if (validPaths.includes(path)) {
      return commonMeta;
    }

    return {
      title: "Medtecha.vn Giải Pháp Kiosk Y Tế Thông Minh",
      description: "CTY công nghệ Pharmacy Việt Nam",
    };
  };
  const metadata = getMetadata(pathname);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    },);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDZM5PNK');
          `}
        </Script>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDZM5PNK"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
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
