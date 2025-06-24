/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

interface CartItemProps {
  item: {
    image: string,
    title: string
  }
}

export const CartItem = (props: CartItemProps) => {
  const { item } = props;

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <Link
          href="#"
          className="bg-white block w-full aspect-[433/284] mb-[36px] hover:translate-y-[-8px] duration-200 transition-all ease-in"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
          }}
        >
          <img
            src={item.image}
            alt="Main Home"
            className="w-full h-full object-cover"
          />
        </Link>
        <h2 className="font-[400] text-[18px] text-[#333]">{item.title}</h2>
      </div>
    </>
  )
}