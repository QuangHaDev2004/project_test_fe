import Link from "next/link"
import { BsMouse2 } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa"
import { VscDesktopDownload } from "react-icons/vsc"

export const DemoInstall = () => {
  return (
    <>
      <div className="bg-[#1D1D1D] py-[120px] text-white">
        <div className="container">
          {/* Wrap */}
          <div className="flex items-center gap-[80px]">
            {/* Left */}
            <div className="w-[50%] pr-[20px]">
              <h2 className="font-[500] text-[95px] text-[#616161] font-[HarleyStyle]">
                Demo Import
              </h2>
              <h3 className="font-[500] text-[35px] text-white font-2 mt-[-15px] space-x-0.5 mb-[40px]">
                One-Click Demo Install
              </h3>
              <div className="font-[500] text-[15px] text-[#F7F7F7] leading-[1.8] mb-[60px]">
                Herion includes a One-Click Demo Importer, to allow you to import the demo content easily. It is the cool way to set up your theme in a couple of minutes from this starting point.
              </div>
              <Link href="#" className="bg-[#EE2851] inline-flex items-center justify-center px-[30px] py-[15px] text-[13px] font-2 hover:bg-white hover:text-black">
                Get your copy
              </Link>
            </div>

            {/* Right */}
            <div className="px-[20px] flex-1">
              <div className="flex flex-col gap-[100px]">
                {/* Item */}
                <div className="flex items-center gap-[60px]">
                  <div className="w-[90px] h-[90px] rounded-full border-2 border-[#E0E0E0] flex items-center justify-center relative">
                    <BsMouse2 className="text-[45px] text-[#E0E0E0]" />
                    {/* Line */}
                    <div className="bg-white absolute top-[100%] left-[50%] w-[1px] h-[100px] translate-x-[-50%]"></div>
                  </div>
                  <div className="text-[18px] text-white font-2">
                    Install herion
                  </div>
                </div>
                <div className="flex items-center gap-[60px]">
                  <div className="w-[90px] h-[90px] rounded-full border-2 border-[#E0E0E0] flex items-center justify-center relative">
                    <VscDesktopDownload className="text-[45px] text-[#E0E0E0]" />
                    {/* Line */}
                    <div className="bg-white absolute top-[100%] left-[50%] w-[1px] h-[100px] translate-x-[-50%]"></div>
                  </div>
                  <div className="text-[18px] text-white font-2">
                    Import Demo Content
                  </div>
                </div>
                <div className="flex items-center gap-[60px]">
                  <div className="w-[90px] h-[90px] rounded-full border-2 border-[#E0E0E0] flex items-center justify-center">
                    <FaRegHeart className="text-[45px] text-[#E0E0E0]" />
                  </div>
                  <div className="text-[18px] text-white font-2">
                    Have fun!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}