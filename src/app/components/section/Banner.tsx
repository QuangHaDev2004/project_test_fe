import Link from "next/link"

export const Banner = () => {
  return (
    <>
      <div className="font-2 h-[650px] truncate bg-[url(/assets/images/banner-1.jpg)] bg-center bg-no-repeat bg-cover relative before:absolute before:top-0 before:left-0 before:bg-[#f1f0f29e] before:w-full before:h-full">
        <div className="container">
          <div className="relative mt-[100px] p-[50px] w-[750px]">
            <h2 className="font-[500] text-[50px] mb-[20px]">
              Music WordPress Theme
            </h2>
            <h1 className="font-[500] text-[60px] mb-[16px] leading-[1] whitespace-normal">
              Dedicated to bands, labels, 
              festivals, music store and 
              more...
            </h1>
            <div className="font-[500] text-[30px] mb-[32px]">No coding required</div>
            <Link href="#" className="flex items-center justify-center w-[186px] h-[65px] border">
              View demos
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}