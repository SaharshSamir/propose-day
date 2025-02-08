'use client';

import { useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Question1 from "../assets/question1.jpg";
import Sad1 from "../assets/sad1.jpg";
import Sad2 from "../assets/sad2.gif";
import Sad3 from "../assets/sad3.jpg";
import Sad4 from "../assets/sad4.gif";
import Sad5 from "../assets/sad5.gif";
import Sad6 from "../assets/sad6.gif";
import Sad7 from "../assets/sad7.gif";
import Sad8 from "../assets/sad8.gif";
import Sad9 from "../assets/sad9.gif";
import Sad10 from "../assets/sad10.gif";
import Sad12 from "../assets/sad12.gif";
import Sad13 from "../assets/sad13.gif";
import Sad14 from "../assets/sad14.gif";

import Maybe1 from "../assets/maybe1.gif";

type Cord = {
  x: number;
  y: number;
}

const sadCats = [Sad1, Sad2, Sad3, Sad4, Sad5, Sad6, Sad7, Sad8, Sad9, Sad10, Sad12, Sad13, Sad14];
const maybeCats = [Maybe1];

const possibleNoTexts = [
  "Why nooooottttt??😩",
  "Ouch, that hurts 💔",
  "Pleeeeesseeee 🥺",
  "Pretty pleaseeeeee 🥺",
  "You don't really have a choice 😏",
  "Lol can't catch me? 🏃‍♂️",
]

function generateRandomIndex(current: number, forArray: Array<any>) {
  const generate = () => Math.floor(Math.random() * forArray.length);

  let randomIndex = generate();
  while (randomIndex === current) {
    randomIndex = generate();
  }
  return randomIndex;
}

export default function Home() {
  const [cord, setCord] = useState<Cord | undefined>(undefined);
  const [response, setResponse] = useState<string>("No");
  const [img, setImg] = useState<StaticImageData>(Question1);

  function changeImg(prompt: "yes" | "no" | "maybe") {

    if (prompt === "no") {
      const currentIndex = sadCats.indexOf(img);
      const randomIndex = generateRandomIndex(currentIndex, sadCats);
      setImg(sadCats[randomIndex]);
    } else if (prompt === "maybe") {
      const currentIndex = maybeCats.indexOf(img);
      const randomIndex = generateRandomIndex(currentIndex, maybeCats);
      setImg(maybeCats[randomIndex]);
    } else {
      setImg(Question1);
    }
  }

  function noNo() {
    setCord({
      x: Math.floor(Math.random() * (window.innerHeight - 200)),
      y: Math.floor(Math.random() * (window.innerWidth - 200)),
    });
    const currentIndex = possibleNoTexts.indexOf(response);
    const randomIndex = generateRandomIndex(currentIndex, possibleNoTexts);
    setResponse(possibleNoTexts[randomIndex]);
    changeImg("no");

  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" h-[25rem] w-[30rem] border border-black">
        <img
          src={img?.src}
          style={{ height: "100%", width: "100%" }}
          alt="Please"
          width={0}
          height={0}
        />
      </div>
      <p className="text-4xl my-3">Will you be my valentine?</p>
      <div className=" flex my-3 gap-2">
        <Link href="/yes">
          <button onMouseOver={() => setImg(maybeCats[0])} onClick={() => { }} className="px-8 text-xl py-2 border border-green-600 rounded-xl bg-green-100 text-green-600 font-bold">Yes</button>
        </Link>
        <button
          onMouseOver={noNo}
          style={cord ? { position: 'absolute', top: cord.x, right: cord.y } : undefined}
          className="px-8 text-xl py-2 border border-red-600 rounded-xl bg-red-100 text-red-600 font-bold">
          {response}
        </button>
      </div>
    </div>
  );
}
