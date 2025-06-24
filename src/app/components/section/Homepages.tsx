"use client"
import { BoxHead } from "../boxHead/BoxHead";
import { CartItem } from "../card/CartItem";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Homepages = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const DataList = [
    {
      id: 1,
      title: "Main Home",
      image: "/assets/images/demo-1.jpg"
    },
    {
      id: 2,
      title: "One-Page",
      image: "/assets/images/demo-2.jpg"
    },
    {
      id: 3,
      title: "Band Home",
      image: "/assets/images/demo-3.jpg"
    },
    {
      id: 4,
      title: "Home Alt",
      image: "/assets/images/demo-4.jpg"
    },
    {
      id: 5,
      title: "Minimal",
      image: "/assets/images/demo-5.jpg"
    },
    {
      id: 6,
      title: "DJ/Event",
      image: "/assets/images/demo-6.jpg"
    },
    {
      id: 7,
      title: "Festival",
      image: "/assets/images/demo-7.jpg"
    },
    {
      id: 8,
      title: "Record Studio",
      image: "/assets/images/demo-8.jpg"
    },
    {
      id: 9,
      title: "Interactive Links",
      image: "/assets/images/demo-9.jpg"
    },
    {
      id: 10,
      title: "Artist Slider",
      image: "/assets/images/demo-10.jpg"
    },
    {
      id: 11,
      title: "Shop Home",
      image: "/assets/images/demo-11.jpg"
    },
    {
      id: 12,
      title: "Discography Home",
      image: "/assets/images/demo-12.jpg"
    },
    {
      id: 13,
      title: "Videos Home",
      image: "/assets/images/demo-13.jpg"
    },
    {
      id: 14,
      title: "Blog Home",
      image: "/assets/images/demo-14.jpg"
    },
    {
      id: 15,
      title: "Artist Metro",
      image: "/assets/images/demo-15.jpg"
    }
  ]

  return (
    <>
      <div className="pt-[100px] pb-[120px]">
        <div className="container">
          {/* Box Head */}
          <BoxHead subtitle="15 Templates" title="Homepages" />

          {/* List Item */}
          <div className="grid grid-cols-3 gap-x-[36px] gap-y-[44px]">
            {/* Item */}
            {DataList.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}