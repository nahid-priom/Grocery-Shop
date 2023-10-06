"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { cartState } from "@/atom/cartState";
import toast from "react-hot-toast";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void; // Specify the type explicitly
  product: {
    id: number;
    img: string;
    title: string;
    desc: string;
    price: string;
    quantity: number;
  };
}
type CarItemType = {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: string;
  quantity: number;
};

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose, // Use onClose with the specified type
  product,
}) => {
  const [cartItem, setCartItem] = useRecoilState<CarItemType[]>(cartState);
  const addItemToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      setCartItem((prevState: CarItemType[]) => [...prevState, product]);
    } else {
      setCartItem((prevState: CarItemType[]) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }
    toast(`${product.title} added to cart`)
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} className="z-100">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-blackish text-2xl font-medium uppercase">
              {product.title}
            </ModalHeader>
            <ModalBody>
              <img src={product.img} alt={product.title} />
              <p className="text-gray-500 text-xs xl:text-xl max-w-[300px]">
                {product.desc}
              </p>
              <div className="font-bold text-xl flex gap-4">
                ${product.price}
                <del className="text-gray-500 font-normal">
                  ${parseFloat(product.price) + 50}.00
                </del>
              </div>

              <Button
                className="bg-accent text-blackish font-bold my-4"
                color="danger"
                variant="light"
                onClick={addItemToCart} // Use onClick with the specified type
              >
                ADD TO CART
              </Button>
              {/* Add your modal actions here */}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
