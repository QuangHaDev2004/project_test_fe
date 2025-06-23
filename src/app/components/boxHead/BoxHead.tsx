interface BoxHeadProps {
  subtitle: string,
  title: string,
  description?: string
}

export const BoxHead = (props: BoxHeadProps) => {
  const { subtitle, title, description } = props

  return (
    <>
      <div className="text-center leading-[1.2] mb-[60px]">
        <h2 className="font-[500] text-[95px] text-[#B2B2B2] font-[HarleyStyle]">{subtitle}</h2>
        <h3 className="font-[500] text-[35px] text-[#333] font-2 mb-[50px]">{title}</h3>
        <div className="w-[960px] mx-auto font-[400] text-[15px] text-[#939393] leading-[1.8]">{description}</div>
      </div>
    </>
  )
}