"use client"
import { FaRegCreditCard } from "react-icons/fa";
import { FaHeadphonesSimple, FaLocationDot, FaPencil, FaRotateLeft } from "react-icons/fa6";
import { HiOutlineCircleStack, HiOutlineSpeakerWave } from "react-icons/hi2";
import { ImHammer } from "react-icons/im";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LiaLifeRingSolid } from "react-icons/lia";
import { MdOutlineCameraAlt, MdOutlineMail } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const FeatureList = () => {
  const dataList = [
    {
      id: 1,
      title: "Enhanced Page Builder",
      desc: "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.",
      icon: ImHammer
    },
    {
      id: 2,
      title: "Slider Revolution",
      desc: "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package",
      icon: FaRotateLeft
    },
    {
      id: 3,
      title: "Live Customizer",
      desc: "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.",
      icon: FaPencil
    },
    {
      id: 4,
      title: "One-Click Demo Install",
      desc: "Import the demo data in one click and edit the content to suits your need. The easiest way to create an awesome website quickly.",
      icon: IoCloudDownloadOutline
    },
    {
      id: 5,
      title: "Power Elite Support",
      desc: "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.",
      icon: FaHeadphonesSimple
    },
    {
      id: 6,
      title: "Lifetime Free Updates",
      desc: "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.",
      icon: LiaLifeRingSolid
    },
    {
      id: 7,
      title: "Translatable Ready",
      desc: "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.",
      icon: FaLocationDot
    },
    {
      id: 8,
      title: "Child Theme Included",
      desc: "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
      icon: FaRegCreditCard
    },
    {
      id: 9,
      title: "Content Blocks",
      desc: "Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages.",
      icon: HiOutlineCircleStack
    },
    {
      id: 10,
      title: "Social Media Integration",
      desc: "Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...",
      icon: HiOutlineSpeakerWave
    },
    {
      id: 11,
      title: "Photos Included",
      desc: "Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license.",
      icon: MdOutlineCameraAlt
    },
    {
      id: 12,
      title: "Contact Form 7",
      desc: "Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective.",
      icon: MdOutlineMail
    }
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="pt-[80px] pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-4 gap-x-[36px] gap-y-[50px]">
            {/* Item */}
            {dataList.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                  <div className="w-full h-[90px] flex items-center">
                    {<Icon className="text-[48px] text-[#EE2851]" />}
                  </div>
                  <h2 className="font-2 text-[20px] text-[#333] mb-[20px]">{item.title}</h2>
                  <div className="text-[14px] text-[#333] leading-[1.8]">{item.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}