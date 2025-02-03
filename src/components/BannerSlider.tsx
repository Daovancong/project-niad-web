import { useState, useEffect } from "react";
import Image from "next/image";
import style from "@/app/style/styles.module.css";


const SliderBanner = () => {
    const banners = [
        {
            id: 1,
            imgSrc: "/banner/banner02-removebg-preview.png",
            imgAlt: "Banner 1",
            title: "ỨNG DỤNG TRÍ TUỆ NHÂN TẠO ",
            til: "(AI) TRONG Y TẾ",
            description:
                "Dịch vụ máy chủ ảo VPS/ Cloud Server cho phép bạn thiết lập hạ tầng điện toán có quy mô từ một máy chủ ảo riêng lẻ đến hệ thống có hàng trăm máy chủ với công nghệ ảo hóa vượt trội nhất",
            bgColor: "#005DB2",
            marginTop: "-80px",
        },
        {
            id: 2,
            imgSrc: "/banner/banner-04.jpg",
            imgAlt: "Banner 2",
            title: "CÔNG NGHỆ ( BIG DATA )",
            til: "TRONG Y TẾ",
            description:
                "Bằng phân tích Big data, các bệnh viện hoàn toàn có thể ngăn ngừa dịch bệnh, điều trị hiệu quả và giảm chi phí cho cả bệnh viện và bệnh nhân.",
            bgColor: "#FFF",
            justify: "center",
            innerWidth: "980px",
            imgOp: "brightness-75",
            textColor: "#13f563",
            borderSolid: "solid 3px #13f563",
            placeholder: "!placeholder-[#13f563]"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <section className={`${style.slider} py-[1.125rem] overflow-hidden relative`}>
            <div
                className={`${style.sliderWrapper} flex w-full h-full transition-transform duration-700 ease-in-out`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`${style.niadContainer} w-full h-full relative overflow-hidden list-none p-0 z-[1] min-w-full flex items-center justify-center`}
                        style={{ backgroundColor: banner.bgColor }}
                    >
                        <div
                            className={`${style.niadWar} relative justify-end`}
                            style={{ justifyContent: banner.justify }}
                        >
                            <div
                                className={`${style.niadSlider} text-center text-[18px] flex justify-center items-center`}
                            >
                                <Image
                                    className={`${banner.imgOp} w-full h-[420px] `}
                                    src={banner.imgSrc}
                                    style={{ width: banner.innerWidth }}
                                    alt={banner.imgAlt}
                                    width={600}
                                    height={100}
                                />
                                <div className={`${style.info} absolute flex top-0 left-0 text-center w-full h-full`}>
                                    <div className="w-full mt-[-125px]" style={{ marginTop: banner.marginTop }}>
                                        <div className={`${style.container} px-6`}>
                                            <h2
                                                className={`${style.textOnBanner} text-[35px] font-bold mt-0 text-left pt-7`}
                                                style={{
                                                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                                                    color: banner.textColor,
                                                }}
                                            >
                                                {banner.title} <br />
                                                {banner.til}

                                            </h2>
                                            <p
                                                style={{
                                                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                                                    color: banner.textColor,
                                                    fontWeight: 'bold',
                                                }}
                                                className={`${style.textOnBanner} leading-[28px] text-justify mt-10 text-[18px]`}
                                            >
                                                {banner.description}
                                            </p>
                                            <form
                                                action=""
                                                className={`${style.formAdvisory} flex text-center mt-5`}
                                            >
                                                <input
                                                    className={`${banner.placeholder}`}
                                                    type="email"
                                                    placeholder="Email của bạn"
                                                    style={{
                                                        border: banner.borderSolid,

                                                    }}
                                                />
                                                <button
                                                    type="submit"
                                                    name="sub"
                                                    className={`${style.btnAdvise} flex w-[159.4px] h-[47.89px] rounded-[23px] ml-3 text-left items-center justify-center hover:bg-[#CE0101]`}
                                                    style={{
                                                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                                                        border: banner.borderSolid,
                                                        color: banner.textColor,

                                                    }}
                                                >
                                                    Nhận tư vấn
                                                    <Image
                                                        className="ml-[10px] mr-[-8px] max-w-full"
                                                        width={36}
                                                        height={36}
                                                        src={"/icon/iconLeft.png"}
                                                        alt="iconLeft"
                                                    />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SliderBanner;
