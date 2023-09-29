import React from 'react'
import Image from 'next/image';
interface propsType {
    img : string;
}

const Slide:React.FC<propsType> = ({img}) => {
  return (
    <div>
        <Image 
            className="w-[100%] h-[200px] md:h-auto rounded-xl object-cover"
            src={img}
            alt='banner'
            width={1000}
            height={200}
        />
    </div>
  )
}

export default Slide