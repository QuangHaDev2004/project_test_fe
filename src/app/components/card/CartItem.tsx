/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

interface CartItemProps {
  item: {
    image: string,
    title: string
  }
}

export const CartItem = (props: CartItemProps) => {
  const { item } = props;

  return (
    <>
      <div className="text-center">
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