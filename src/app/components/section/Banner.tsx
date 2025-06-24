"use client"
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Banner = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="font-2 lg:h-[800px] h-auto truncate bg-[url(/assets/images/banner-1.jpg)] bg-center bg-no-repeat bg-cover relative before:absolute before:top-0 before:left-0 before:bg-[#f1f0f29e] before:w-full before:h-full">
        <div className="container">
          <div className="lg:mt-[30px] mt-0 lg:px-[50px] py-[80px] px-0 lg:w-[750px] md:w-[640px] w-full">
            <h2 className="font-[500] sm:text-[70px] text-[50px] sm:mb-[20px] m-0 font-[HarleyStyle]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Music WordPress Theme
            </h2>
            <h1 className="font-[500] sm:text-[60px] text-[40px] mb-[16px] leading-[1] whitespace-normal" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Dedicated to bands, labels, 
              festivals, music store and 
              more...
            </h1>
            <div className="font-[500] sm:text-[30px] text-[20px] mb-[32px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              No coding required
            </div>
            <Link href="#" className="flex items-center justify-center lg:w-[175px] md:w-[138px] w-100% lg:h-[59px] h-[45px] border" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
              View demos
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}