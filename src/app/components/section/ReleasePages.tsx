/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link"
import { BoxHead } from "../boxHead/BoxHead"
import { CartItem } from "../card/CartItem"
import { useState } from "react"

export const ReleasePages = () => {
  const DataList1 = [
    {
      id: 1,
      title: "Info at Right",
      image: "/assets/images/demo2-1.jpg"
    },
    {
      id: 2,
      title: "Info at Left",
      image: "/assets/images/demo2-2.jpg"
    },
    {
      id: 3,
      title: "Wide Width",
      image: "/assets/images/demo2-3.jpg"
    },
    {
      id: 4,
      title: "Custom Header",
      image: "/assets/images/demo2-4.jpg"
    },
    {
      id: 5,
      title: "Custom Layout",
      image: "/assets/images/demo2-5.jpg"
    },
    {
      id: 6,
      title: "Text Oriented",
      image: "/assets/images/demo2-6.jpg"
    },
    {
      id: 7,
      title: "Compact",
      image: "/assets/images/demo2-7.jpg"
    },
    {
      id: 8,
      title: "Minimal",
      image: "/assets/images/demo2-8.jpg"
    }
  ]

  const DataList2 = [
    {
      id: 1,
      title: "Masonry",
      image: "/assets/images/demo2-5.jpg"
    },
    {
      id: 2,
      title: "Standard",
      image: "/assets/images/demo2-6.jpg"
    },
    {
      id: 3,
      title: "Gallery",
      image: "/assets/images/demo2-7.jpg"
    },
    {
      id: 4,
      title: "Label",
      image: "/assets/images/demo2-8.jpg"
    }
  ]

  const [activeTab, setTabActive] = useState<"single" | "listing">("single");

  const handleTabChange = (tab: "single" | "listing", event: any) => {
    event.preventDefault();
    setTabActive(tab);
  }

  const data = activeTab === "single" ? DataList1 : DataList2;

  return (
    <>
      <div className="pt-[100px] pb-[120px]">
        <div className="container">
          {/* Box Head */}
          <BoxHead
            subtitle="Discography"
            title="Release Pages"
            description="Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout."
          />

          {/* Tab action */}
          <div className="border-b border-[#ddd] flex items-center justify-center font-2 mb-[80px]">
            <Link
              href="#"
              className={"px-[25px] py-[16px] font-[500] text-[14px] text-[#333 border-b-[3.5px] " + 
                (activeTab === "single"
                  ? 
                  "border-black"
                  :
                  "border-transparent"
                )}
              onClick={(event) => handleTabChange("single", event)}
            >
              Release Single Pages
            </Link>
            <Link
              href="#"
              className={"px-[25px] py-[16px] font-[500] text-[14px] text-[#333] border-b-[3.5px] " + 
                (activeTab === "listing"
                  ? 
                  "border-black"
                  :
                  "border-transparent"
                )}
              onClick={(event) => handleTabChange("listing", event)}
            >
              Release Listing
            </Link>
          </div>

          {/* List Item */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-[36px] md:gap-y-[44px] gap-[20px]">
            {data.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="">
              <img src="/assets/images/and-more.png" alt="And More" />
            </div>
          </div>

          <div className="mt-[90px] text-[18px] text-[#939393] text-center">and more…</div>
        </div>
      </div>
    </>
  )
}