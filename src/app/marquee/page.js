"use client";
import { ThreeDMarquee } from "../components/three-d-marquee";
export default function ThreeDMarqueeDemo() {
  const images = [
    "/Munshot/Hero/13.png",
   "/Munshot/Hero/2.png",
   "/Munshot/Hero/3.png",
   "/Munshot/Hero/4.png",
   "/Munshot/Hero/5.png",
   "/Munshot/Hero/6.png",
   "/Munshot/Hero/7.png",
   "/Munshot/Hero/8.png",
   "/Munshot/Hero/9.png",
   "/Munshot/Hero/10.png",
   "/Munshot/Hero/11.png",
   "/Munshot/Hero/12.png",
   "/Munshot/Hero/1.png",//imp
   "/Munshot/Hero/14.png",
   "/Munshot/Hero/15.png",
   "/Munshot/Hero/16.png",
   "/Munshot/Hero/17.png",
   "/Munshot/Hero/18.png",
   "/Munshot/Hero/19.png",
   "/Munshot/Hero/20.png",
   "/Munshot/Hero/21.png",
   "/Munshot/Hero/22.png",
   "/Munshot/Hero/23.png",
   "/Munshot/Hero/24.png",
   "/Munshot/Hero/25.png",

  ];
  return (
    <div
      className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}