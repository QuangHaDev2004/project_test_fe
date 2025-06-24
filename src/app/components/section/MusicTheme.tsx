"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

export const MusicTheme = () => {
  return (
    <>
      <div className="pt-[100px] pb-[120px] bg-[url(/assets/images/bg-demo-1.png)] bg-no-repeat bg-center">
        <div className="container">
          <div className="text-center mb-[40px]">
            <h1 className="font-[500] text-[95px] text-[#B2B2B2] font-[HarleyStyle]">
              Making Music Themes Since 2011
            </h1>
            <h2 className="font-[500] text-[35px] text-white font-2">
              Latest Music Theme Reviews
            </h2>
          </div>
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <Link href="#" className="block w-[960px] mx-auto text-center">
                <div className="font-[14px] text-[#F7F7F7]">
                  Love this theme! I&apos;m still working on it and having some questions here and there, but the Customer Support team answers them in a timely manner and explains it clearly. Very helpful for a beginner like me.
                </div>
                <div className="font-2 text-[20px] text-white mt-[20px]">mmorita1 (Kayo)</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="block w-[960px] mx-auto text-center">
                <div className="font-[14px] text-[#F7F7F7]">
                  Customer support is super fast and super nice. It has been a few years since I touched a website so I am dusting off my cobwebs and I am not feeling bad about asking questions! Thanks guys!
                </div>
                <div className="font-2 text-[20px] text-white mt-[20px]">luckyyy7 (Firemaster)</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="block w-[960px] mx-auto text-center">
                <div className="font-[14px] text-[#F7F7F7]">
                  Haven&apos;t even finished my project yet and have already decided that this has to be one of the best themes i&apos;ve ever had the pleasure of working with. It&apos;s delightfully creative and bold in ways no other theme appears to be. Huge kudos for taking the risk and releasing something for a small niche – absolutely amazing work.
                </div>
                <div className="font-2 text-[20px] text-white mt-[20px]">pduesterdiek (Hyperbent)</div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}