"use client";
import { atom } from "recoil";

type CarItemType = {
  img: string;
  title: string;
  desc: string;
  price: string;
};

export const carState = atom<CarItemType[]>({
  key: "carState",
  default: [],
});
