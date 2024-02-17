/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import AutoPlaySoundOnScroll from '../component/sound';
import BoopButton from '../component/soundAgain';

export default function Meme() {
  return (
    <div className="meme-body">
      <BoopButton />
      <marquee className="text-5xl pb-8">Shrijal Tamrakar's Website</marquee>

      <div className="flex justify-between p-10 ">
        <div className="w-1/3">
          <div className="bg-fuchsia-500 border-2	 border-stone-50 p-5 px-10 text-xl text-black">
            Hi, I am Shrijal Tamrakar. I am Software Engineer with 5 years of
            experience. Currently Working at Fetch.ly
          </div>
        </div>

        <div className="border-2 border-stone-50 p-5 px-10 bg-red-300 text-xl text-black w-1/3">
          When I'm not working or developing, you'll find me in Swyambhu,
          Kathmandu. I love to travel, play Dota 2 and Valorant poorly, as well
          as Beer and Coffee
        </div>
      </div>

      <div className="flex items-center mt-10 justify-between p-10 ">
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5">
            <div>Stanley the man ley</div>
            <Image
              src="/assets/gif/stanley.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>

          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 mt-20">
            <Image
              src="/assets/gif/ram.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>

        <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 mt-20">
          <Image
            src="/assets/gif/glasses.gif"
            width="300"
            height="300"
            alt={''}
          />
        </div>
      </div>

      <Image
        src="/assets/inspriation/pexels-aboodi-vesakaran-19664328.jpg"
        width="300"
        height="100"
        alt={''}
        className="w-full"
      />

      <Image
        src="/assets/inspriation/pexels-james-frid-8482449.jpg"
        width="300"
        height="100"
        alt={''}
        className="w-full"
      />

      <Image
        src="/assets/inspriation/pexels-polina-kovaleva-6185656.jpg"
        width="300"
        height="100"
        alt={''}
        className="w-full"
      />

      <div>
        <Image
          src="/assets/inspriation/pexels-kaboompics-com-6375.jpg"
          width="300"
          height="100"
          alt={''}
          className="w-full"
        />
      </div>


      <div className="flex items-center mt-10 justify-between p-10 ">
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5">
            <div>Stanley the man ley</div>
            <Image
              src="/assets/gif/stanley.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>

          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 mt-20">
            <Image
              src="/assets/gif/ram.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>

        <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 mt-20">
          <Image
            src="/assets/gif/glasses.gif"
            width="300"
            height="300"
            alt={''}
          />
        </div>
      </div>
    </div>
  );
  {
    /* AGILE SOFTWARE DEVELOPMENT IS MY PASSION */
  }
}
