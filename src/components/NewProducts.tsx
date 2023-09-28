import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
    {
      img: "/g-1.jpg",
      title: "Dawn Ultra",
      desc: "Antibacterial Soap",
      price: "45.00",
    },
    {
      img: "/g-3.jpg",
      title: "Nestle Fitness",
      desc: "Nutritous energy",
      price: "55.00",
    },
    {
      img: "/g-4.jpg",
      title: "Fitnesse",
      desc: "Honey and Almond",
      price: "25.00",
    },
    {
      img: "/g-5.jpg",
      title: "Honey Nut",
      desc: " Heart of Cheerios",
      price: "45.00",
    },
    {
      img: "/g-6.jpg",
      title: "Soyabin Seeds",
      desc: "Good for health",
      price: "58.00",
    },
    {
      img: "/g-7.jpg",
      title: "Tata Tea",
      desc: "Premium Deshi Cha",
      price: "100.00",
    },
    {
      img: "/g-9.jpeg",
      title: "Chef Antonio",
      desc: "Garlic Sauce",
      price: "120.00",
    },
    {
        img: "/g-10.jpeg",
        title: "Gold Fish",
        desc: "Baked Crackers",
        price: "120.00",
      },
  ];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className='grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {productsData.map((item, index) => (
                    <ProductCard 
                     key={index}
                     img = {item.img}
                     title = {item.title}
                     desc = {item.desc}
                     price = {item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts