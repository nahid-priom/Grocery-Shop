"use client";
import { atom } from "recoil";

type CarItemType = {
  id:number;
  img: string;
  title: string;
  desc: string;
  price: string;
  quantity:number;
};

export const cartState = atom<CarItemType[]>({
  key: "carState",
  default: [],
});
