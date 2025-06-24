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
      <div className="font-2 h-[800px] truncate bg-[url(/assets/images/banner-1.jpg)] bg-center bg-no-repeat bg-cover relative before:absolute before:top-0 before:left-0 before:bg-[#f1f0f29e] before:w-full before:h-full">
        <div className="container">
          <div className="relative mt-[100px] p-[50px] w-[750px]">
            <h2 className="font-[500] text-[70px] mb-[20px] font-[HarleyStyle]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Music WordPress Theme
            </h2>
            <h1 className="font-[500] text-[60px] mb-[16px] leading-[1] whitespace-normal" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Dedicated to bands, labels, 
              festivals, music store and 
              more...
            </h1>
            <div className="font-[500] text-[30px] mb-[32px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              No coding required
            </div>
            <Link href="#" className="flex items-center justify-center w-[186px] h-[65px] border" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
              View demos
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}