/* eslint-disable react/no-unescaped-entities */
// @ts-ignore: Unreachable code error

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import AutoPlaySoundOnScroll from '../component/sound';
import BoopButton from '../component/soundAgain';

export default function Meme() {
  return (
    <div className="meme-body">
      <BoopButton />
      <div className="pt-10">
        <div className="marquee">
          <p className="text-[80px] font-bold text-purple-200">
            Shrijal Tamrakar's Website
          </p>
        </div>
      </div>

      <div className="text-[50px] pl-10 italic font-bold text-blue-300 pt-2">
        <span className="text-white underline">AGILE </span>
        <span>SOFTWARE </span>
        <span className="text-white">DEVELOPMENT </span> 
        <span className="text-black">IS </span>
        MY
        <span className="text-white"> PASSION</span>
      </div>

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

      <div className="flex mt-10 justify-between p-10 ">
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5">
            <Image
              src="/assets/gif/golf.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>

          <div className="border border-stone-50 p-5 mt-20 bg-indigo-700">
            <Image
              src="/assets/gif/dog-laptop.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50">
            <Image
              src="/assets/gif/cat-laptop.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>
      </div>

      <div>
        <Image
          src="/assets/gif/kiminon.gif"
          width="300"
          height="300"
          alt={'w-fil'}
          className="w-full"
        />
      </div>

      <div className="flex mt-10 justify-between p-10 ">
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5">
            <Image
              src="/assets/gif/michel.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>

          <div className="border border-stone-50 p-5 mt-20 bg-indigo-700">
            <Image
              src="/assets/gif/mindyourb.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50">
            <Image
              src="/assets/gif/pain.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-between p-10 ">
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5">
            <Image
              src="/assets/gif/mrbean.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>

          <div className="border border-stone-50 p-5 mt-20 bg-indigo-700">
            <Image
              src="/assets/gif/spooder.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>
        <div>
          <div className="bg-fuchsia-500 border-2	border-stone-50">
            <Image
              src="/assets/gif/snoop.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>
      </div>

      {/* Last */}

      <div className="flex justify-between p-10 ">
        <div>
          <div>
            <div className="border-stone-50 p-5 mb-10">
              <Image
                src="/assets/gif/spoodance.gif"
                width="500"
                height="300"
                alt={''}
              />
            </div>
          </div>

          <div>
            <Image
              src="/assets/gif/alldance.gif"
              width="600"
              height="200"
              alt={''}
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/assets/gif/danced.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>

          <div className="bg-fuchsia-500 border-2	border-stone-50 mt-10">
            <Image src="/assets/gif/bs.gif" width="300" height="300" alt={''} />
          </div>
        </div>
      </div>

      {/* Lastest Last */}
      <div className="p-20 text-xl font-bold capitalize">
        <h1>This website is built using NEXT.</h1>
        <h1>My blood, sweat and tears has built this website.</h1>
        <h1>This website was not built with love.</h1>
      </div>
      <div className="text-[100px]">WOW YOU MADE IT HERE</div>

      <div className="text-[100px]">WOW YOU MADE IT HERE</div>
      <div className="text-[100px]">WOW YOU MADE IT HERE</div>
      <div className="text-[100px]">WOW YOU MADE IT HERE</div>

      <div className="flex mt-20">
        <div className="border-stone-50 p-5 mb-10">
          <Image src="/assets/gif/th2.gif" width="400" height="300" alt={''} />
        </div>

        <div>
          <div className="text-[100px]">THANKS</div>
          <div className="text-[80px]">GREAT JOB!!!</div>
        </div>

        <div className="border-stone-50 p-5 mb-10">
          <Image
            src="/assets/gif/thumb1.gif"
            width="500"
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
