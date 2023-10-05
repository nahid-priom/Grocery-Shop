"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

// Define a type for the product data
type ProductData = {
  id:string;
  img: string;
  title: string;
  desc: string;
  price: string;
};

const productsData = [
  {
    id: "1",
    img: "/g-1.jpg",
    title: "Dawn Ultra",
    desc: "Antibacterial Soap",
    price: "45.00",
  },
  {
    id: "2",
    img: "/g-3.jpg",
    title: "Nestle Fitness",
    desc: "Nutritous energy",
    price: "55.00",
  },
  {
    id: "3",
    img: "/g-4.jpg",
    title: "Fitnesse",
    desc: "Honey and Almond",
    price: "25.00",
  },
  {
    id: "4",
    img: "/g-5.jpg",
    title: "Honey Nut",
    desc: " Heart of Cheerios",
    price: "45.00",
  },
  {
    id: "5",
    img: "/g-6.jpg",
    title: "Soyabin Seeds",
    desc: "Good for health",
    price: "58.00",
  },
  {
    id: "6",
    img: "/g-7.jpg",
    title: "Tata Tea",
    desc: "Premium Deshi Cha",
    price: "100.00",
  },
  {
    id: "7",
    img: "/g-9.jpeg",
    title: "Chef Antonio",
    desc: "Garlic Sauce",
    price: "120.00",
  },
  {
    id: "8",
    img: "/g-10.jpeg",
    title: "Gold Fish",
    desc: "Baked Crackers",
    price: "120.00",
  },
];

const NewProducts = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );

  // Function to open the modal with a specific product
  const openModal = (product: ProductData) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
            
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              onOpenModal={() => openModal(item)} // Pass the product to openModal
            />
          ))}
        </div>
        {/* Render the ProductModal component conditionally */}
        {selectedProduct && (
          <ProductModal
            isOpen={isModalOpen}
            onClose={closeModal}
            product={selectedProduct} // Pass the selected product data
          />
        )}
      </div>
    </div>
  );
};

export default NewProducts;
