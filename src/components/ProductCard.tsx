import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, price }) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-40 h-40 sm:w-44 sm:h-44 xl:w-60 xl:h-60"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent text-base font-medium uppercase">{title}</h2>
        <p className="text-gray-500 text-xs xl:text-base max-w-[150px]">{desc}</p>
        <div className="font-bold flex gap-4">
            ${price}
            <del className="text-gray-500 font-normal">${parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
