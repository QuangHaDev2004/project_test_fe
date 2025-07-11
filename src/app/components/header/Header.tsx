import Link from "next/link";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

export const Header = () => {
  return (
    <>
      <div 
        className="py-[10px] font-2 sticky top-0 left-0 z-[997]"
        style={{
          boxShadow: "0px 10px 17px -9px rgba(0, 0, 0, .14)"
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-[500] text-[40px] font-[HarleyStyle]">
              #
            </Link>
            {/* Action */}
            <Link href="#" className="lg:block hidden font-[500] text-[17px] hover:before:block hover:before:w-full relative before:hidden before:absolute before:top-[100%] before:w-0 before:h-[1px] before:bg-black transition duration-300 ease-in">
              Buy now
            </Link>

            {/* Button Menu Mobile */}
            <button className="lg:hidden block cursor-pointer">
              <HiMiniBars3CenterLeft className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}