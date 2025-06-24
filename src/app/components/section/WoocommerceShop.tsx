/* eslint-disable @next/next/no-img-element */
"use client"
import { BoxHead } from "../boxHead/BoxHead";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Link from "next/link";

export const WoocommerceShop = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] pt-[100px] pb-[120px]">
        <div className="container">
          {/* Box Head */}
          <BoxHead
            subtitle="Sell Your Merch"
            title="WooCommerce Shop"
            description="Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built to integrates WooCommerce smoothly in its design."
          />

          {/* List Item */}
          <Swiper
            spaceBetween={70}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide className="">
              <Link
                href="#"
                className="bg-white block w-full aspect-[436/462]"
                style={{
                  boxShadow: "0px 6px 23px -4px rgba(0, 0, 0, 0.29)"
                }}
              >
                <img
                  src="/assets/images/slide-1.jpg"
                  alt="Main Home"
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="#"
                className="bg-white block w-full aspect-[436/462]"
                style={{
                  boxShadow: "0px 6px 23px -4px rgba(0, 0, 0, 0.29)"
                }}
              >
                <img
                  src="/assets/images/slide-2.jpg"
                  alt="Main Home"
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="#"
                className="bg-white block w-full aspect-[436/462]"
                style={{
                  boxShadow: "0px 6px 23px -4px rgba(0, 0, 0, 0.29)"
                }}
              >
                <img
                  src="/assets/images/slide-3.jpg"
                  alt="Main Home"
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="#"
                className="bg-white block w-full aspect-[436/462]"
                style={{
                  boxShadow: "0px 6px 23px -4px rgba(0, 0, 0, 0.29)"
                }}
              >
                <img
                  src="/assets/images/slide-4.jpg"
                  alt="Main Home"
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="#"
                className="bg-white block w-full aspect-[436/462]"
                style={{
                  boxShadow: "0px 6px 23px -4px rgba(0, 0, 0, 0.29)"
                }}
              >
                <img
                  src="/assets/images/slide-5.jpg"
                  alt="Main Home"
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </>
  )
}