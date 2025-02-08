'use client';
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import Cat1 from "../../assets/happy1.gif";
import Cat2 from "../../assets/happy2.gif";
import Cat3 from "../../assets/happy3.gif";
import Cat4 from "../../assets/happy4.gif";
import Cat5 from "../../assets/happy5.gif";
import Cat6 from "../../assets/happy6.gif";

const cats = [Cat1, Cat2, Cat3, Cat4, Cat5, Cat6];

function generateRandomIndex(current: number, forArray: Array<any>) {
  const generate = () => Math.floor(Math.random() * forArray.length);

  let randomIndex = generate();
  while (randomIndex === current) {
    randomIndex = generate();
  }
  return randomIndex;
}

export default function Yes() {
  const [img, setImg] = useState<StaticImageData>(Cat1);

  const width = window.innerWidth;
  const height = window.innerHeight;

  function changeImg() {

    const currentIndex = cats.indexOf(img);
    const randomIndex = generateRandomIndex(currentIndex, cats);
    setImg(cats[randomIndex]);
  }


  return (
    <div className="h-screen w-screen flex flex-col cursor-pointer items-center justify-center">
      <Confetti width={width} height={height} />
      <div onClick={changeImg} className=" h-[25rem] w-[30rem] border border-black">
        <img
          src={img.src}
          style={{ height: "100%", width: "100%" }}
          alt="Please"
          width={0}
          height={0}
        />
      </div>
      <h1 className="text-4xl text-center">Yiiippppppppeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
    </div>
  )
}
