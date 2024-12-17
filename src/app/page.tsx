
import Image from "next/image";
import Navigation from "@/components/navigation";
import style from "@/app/style/styles.module.css";

export default function Home() {
  return (
    <main className='w-[70%] bg-white flex flex-col shadow-md h-[10000px]'>
      <Navigation />

      <section className={`${style.slider} py-[1.125rem] overflow-hidden relative"`}>
        <div className={`${style.niadContainer} relative overflow-hidden list-none p-0 z-[1]`}>
          <div className={`${style.niadWar}`}>
            <div className={`${style.niadSlider} w-full mr-[30px] text-center text-[18px] flex justify-center items-center`}>
              <Image
                className="w-full"
                src="/banner/NIAD-ai-banner-hitech-ctcp-dau-tu-va-phat-trien-ngan-luc.jpg"
                alt="Banner description"
                width={600}
                height={100}
              />
              <div className={`${style.info} absolute flex top-0 left-0 text-center w-full h-full`}>
                <div className="w-full mt-[-100px]">
                  <div className={`${style.container}`}>
                    <h2 className={`${style.textOnBanner} text-[48px] font-bold mt-0 text-left pt-10`}>
                      Máy chủ ảo vpn
                      <br />
                      CLOUD SERVER
                    </h2>
                    <p className={`${style.textOnBanner} leading-[26px] text-justify mt-3`}>
                      Dịch vụ máy chủ ảo VPS/ Cloud Server cho phép bạn thiết lập hạ tầng điện toán có quy mô từ một máy chủ ảo riêng lẻ đến hệ thống có hàng trăm máy chủ với công nghệ ảo hóa vượt trội nhất
                    </p>
                    <form action="" className={`${style.formAdvisory} flex text-center mt-9`}>
                      <input
                        type="email"
                        placeholder="Email của bạn"
                      />
                      <button type="submit" name="sub" className={`${style.btnAdvise} flex w-[159.4px] h-[47.89px] rounded-[23px] ml-3 text-left items-center justify-center hover:bg-[#CE0101]`}>
                        Nhận tư vấn
                        <Image
                          className="ml-[10px] mr-[-8px] max-w-full"
                          width={36}
                          height={36}
                          src={'/icon/iconLeft.png'}
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
      </section>

      <section className="flex items-center justify-center overflow-hidden mt-[-252px] relative z-[9999] py-[3.125rem]">
        <div className="flex items-center max-w-[1170px] w-full m-auto">
          <div className="flex w-[calc(100%+30px)] ml-[-15px] pt-[50px]">
            <div className="p-4 pb-20">
              {/* laptop */}
              <div className={`${style.inNiad}`}>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
