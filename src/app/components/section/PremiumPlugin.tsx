/* eslint-disable @next/next/no-img-element */
"use client"
import { FaRegCircleCheck } from "react-icons/fa6";
import { BoxHead } from "../boxHead/BoxHead";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const PremiumPlugin = () => {
  const dataList = [
    {
      id: 1,
      image: "/assets/images/demo-plugin-1.jpg",
      title: "WPBakery Page Builder",
      desc: "Save $74",
      features: [
        {
          text: "Full Version Included"
        },
        {
          text: "Unlimited design options"
        },
        {
          text: "Full Version Included"
        },
        {
          text: "Fast & Easy"
        }
      ]
    },
    {
      id: 2,
      image: "/assets/images/demo-plugin-2.jpg",
      title: "Slider Revolution",
      desc: "Save $109",
      features: [
        {
          text: "Full Version Included"
        },
        {
          text: "Powerful visual editor"
        },
        {
          text: "Advanced Animations"
        },
        {
          text: "For Sliders, Headers and more"
        }
      ]
    },
    {
      id: 3,
      image: "/assets/images/demo-plugin-3.png",
      title: "Wolf Page Builder Extension",
      desc: "Exclusive",
      features: [
        {
          text: "Only Available with our Themes"
        },
        {
          text: "Extends WPBakery Page Builder"
        },
        {
          text: "Adds Tons of Elements and Options"
        }
      ]
    }
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="pt-[100px] pb-[120px]">
        <div className="container">
          {/* Box Head */}
          <BoxHead
            subtitle="Save Money"
            title="$90 of Premium Plugin Included"
            description="Includes WPBakery Page Builder and Slider Revolution premium plugins. Save money and start building your website using the best tools available on the market today."
          />

          {/* List Item */}
          <div className="grid grid-cols-3 gap-[40px]">
            {dataList.map(item => (
              <div key={item.id} className="text-center border border-[#eee] rounded-[4px] p-[80px] hover:shadow-lg transition-shadow duration-300">
                <div className="w-[80px] aspect-square mx-auto mb-[30px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-[600] text-[18px] text-[#333] mb-[20px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  {item.title}
                </h2>
                <div className="text-[24px] text-[#ee2851] mb-[60px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  {item.desc}
                </div>
                <div className="flex flex-col gap-[16px]">
                  {item.features && (
                    <>
                      {item.features.map((child, index) => (
                        <div key={index} className="flex items-center gap-[10px] text-[15px] text-[#939393]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                          <FaRegCircleCheck className="text-[12px] text-[#ee2851]" />
                          <div className="text-left">
                            {child.text}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}