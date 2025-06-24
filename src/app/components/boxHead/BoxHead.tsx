"use client"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

interface BoxHeadProps {
  subtitle: string,
  title: string,
  description?: string
}

export const BoxHead = (props: BoxHeadProps) => {
  useEffect(() => {
    AOS.init()
  }, [])

  const { subtitle, title, description } = props

  return (
    <>
      <div className="text-center leading-[1.2] mb-[60px]">
        <h2 className="font-[500] text-[95px] text-[#B2B2B2] font-[HarleyStyle]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          {subtitle}
        </h2>
        <h3 className="font-[500] text-[35px] text-[#333] font-2 mb-[50px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          {title}
        </h3>
        <div className="lg:w-[960px] w-full mx-auto font-[400] text-[15px] text-[#939393] leading-[1.8]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          {description}
        </div>
      </div>
    </>
  )
}