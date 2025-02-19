import React from 'react';
import Image from "next/image";
import style from "@/app/style/styles.module.css";

export default function Boxcpn() {
    return (
        <section className={`${style.whyBox} mt-[50px]`} >
            <div className={`${style.firstLine} `}>
                <div className={`${style.container} flex justify-between items-center mt-[-60px] max-w-[1170px] w-full m-auto`}>
                    <div className="text-[40px] ml-[2px]">
                        <div className="flex w-[30%] h-[2.9px]">
                            <div className="flex-[2] bg-[#e91e1e]"></div>
                            <div className="flex-[8] bg-[#f8b133]"></div>
                        </div>
                        <br />
                        <h2 className="ml-[10px]">
                            Vì sao chọn XTP - AI, BIG DATA?
                        </h2>
                    </div>
                    <div className={`${style.content} mr-6`}>
                        <Image width={100} height={100} src={'/asset1.png'} alt="asset" />
                        <div className="cmt leading-[26px] text-justify font-[Roboto] font-[14px]">
                            XTP – AI, Big Data  được cung ứng dụng rộng rãi trong ngành Y tế - nhà cung cấp giải pháp quản trị tiên phong tại Việt Nam với uy tín thương hiệu lâu đời, chất lượng chăm sóc khách hàng vượt trội cùng với những ưu điểm nổi bật của dịch vụ như:
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${style.whyBox}`}>
                <div className={`${style.container} max-w-[1170px] w-full m-auto`}>
                    <div className={`${style.inside} flex w-[calc(100% +60px)]`}>
                        <div className={`${style.items}`}>
                            <div className={`${style.jay} p-[20px]`}>
                                <div className={`${style.img}`}>
                                    <Image className="h-[60px] w-[60px]" width={60} height={60} src={'/iconitems/technologyIcon.png'} alt="icon item" />
                                </div>
                                <div className={`${style.content}`}>
                                    <h5>Công nghệ hiện đại</h5>
                                    <p className="cmt leading-[21px] text-justify font-[Roboto] text-[14px]">Công nghệ được ứng dụng rất rộng rãi và nổi tiếng như OpenStack và xây dựng theo mô hình Self-service giúp mềm dẻo trong cung cấp dịch vụ công nghệ riêng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`${style.items}`}>
                            <div className={`${style.jay} p-[20px]`}>
                                <div className={`${style.img}`}>
                                    <Image className="h-[60px] w-[60px]" width={60} height={60} src={'/iconitems/safeIcon.png'} alt="icon item" />
                                </div>
                                <div className={`${style.content}`}>
                                    <h5>An toàn đáng tin cậy</h5>
                                    <p className="cmt leading-[21px] text-justify font-[Roboto] text-[14px]">Hệ thống bảo mật An toàn thông tin máy chủ được đặt tại Trung tâm dữ liệu lớn, đáp ứng theo chuẩn quốc tế. Cam kết ổn định, an toàn, bảo mật, tiết kiệm thời gian.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.items}`}>
                            <div className={`${style.jay} p-[20px]`}>
                                <div className={`${style.img}`}>
                                    <Image className="h-[60px] w-[50px]" width={60} height={60} src={'/iconitems/qualityIcon.png'} alt="icon item" />
                                </div>
                                <div className={`${style.content}`}>
                                    <h5>Chất lượng cao</h5>
                                    <p className="cmt leading-[21px] text-justify font-[Roboto] text-[14px]">Dịch vụ cung cấp các giải pháp quản trị phần mềm của XTP – AI, Big Data được phát triển trên các cụm máy chủ phiến chuyên dụng cho hạ tầng đám mây giúp tối ưu hoá tốc độ truy xuất.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.items}`}>
                            <div className={`${style.jay} p-[20px]`}>
                                <div className={`${style.img}`}>
                                    <Image className="h-[60px] w-[60px]" width={60} height={60} src={'/iconitems/likeIcon.png'} alt="icon item" />

                                </div>
                                <div className={`${style.content}`}>
                                    <h5>Chuyên nghiệp</h5>
                                    <p className="cmt leading-[21px] text-justify font-[Roboto] text-[14px]">Đội ngũ hỗ trợ kỹ thuật trực tuyến 24/24 luôn có mặt giải quyết các thắc mắc của khách hàng sớm nhất. Chuyên nghiệp và thân thiện.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
