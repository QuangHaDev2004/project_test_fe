import { CartItem } from "../card/CartItem"

export const Homepages = () => {
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
          <div className="text-center leading-[1.2] mb-[60px]">
            <h2 className="font-[500] text-[95px] text-[#B2B2B2] font-[HarleyStyle]">15 Templates</h2>
            <h3 className="font-[500] text-[35px] text-[#333] font-2">Homepages</h3>
          </div>
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