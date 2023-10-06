import Image from 'next/image';
import React from 'react'

interface CartListProps {
    data: any;
}

const CartList: React.FC<CartListProps> = ({data}) => {
    const {title, img, desc, price, quantity} = data;
  return (
    <div>
      <div className='bg-accent max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between'>
        <Image className='h-[100px]' src={img} alt=''/>
        <div>
          <div className='font-bold text-2xl'>{title}</div>
          <div>Qty : {quantity}</div>
        </div>

        <div className='text-3xl font-bold'>
          ${price * quantity}
        </div>

      </div>
    </div>
  )
}

export default CartList