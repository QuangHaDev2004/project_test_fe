"use client"
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaMailchimp, FaSpotify, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBandsintown } from "react-icons/si";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const SocialNetwork = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="w-full relative aspect-video">
        <video
          src="/assets/videos/video-demo-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0"
        >
        </video>
        <div className="bg-[rgba(0,0,0,0.7)] absolute w-full h-full inset-0"></div>
        <div className="absolute inset-0 py-[120px]">
          <div className="container">
            <div className="w-[925px] mx-auto text-center">
              <h2 className="font-[500] text-[95px] text-[#565154] font-[HarleyStyle]">Social Integration</h2>
              <h3 className="font-[500] text-[35px] text-white font-2 mt-[-15px] space-x-0.5 mb-[40px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                Social Network & Music Platform Oriented
              </h3>
              <div className="font-[500] text-[15px] text-[#F7F7F7] leading-[1.8] mb-[80px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                Embed your music and social feeds seamlessly with Herion. Display your media and content directly from Spotify, YouTube, Instagram, Bandsintown, Twitter and more…
              </div>
            </div>
            <div className="flex items-center justify-center gap-[50px] mb-[100px]">
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                <FaSpotify className="text-white text-[60px]" />
              </Link>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                <FaYoutube className="text-white text-[60px]" />
              </Link>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                <FaInstagram className="text-white text-[60px]" />
              </Link>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                <SiBandsintown className="text-white text-[60px]" />
              </Link>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
                <FaXTwitter className="text-white text-[60px]" />
              </Link>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                <FaFacebookF className="text-white text-[60px]" />
              </Link>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center w-[120px] h-[120px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="700">
                <FaMailchimp className="text-white text-[60px]" />
              </Link>
            </div>
            <div className="font-[400] text-[18px] text-[#F7F7F7] text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              and more…
            </div>
          </div>
        </div>
      </div>
    </>
  )
}