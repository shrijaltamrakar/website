'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Meme() {
  return (
    <div className="p-10 meme-body">
      <marquee className="text-5xl pb-8">Shrijal Tamrakar's Website</marquee>

      <div className="flex w-1/3">
        <div className="bg-fuchsia-500 border-2	 border-stone-50 p-5 px-10">
          Hi, I am Shrijal Tamrakar. I am Software Engineer with 5 years of
          experience.
        </div>
      </div>

      <div className="flex w-1/2 mt-10">
        <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 px-10">
          I play at games i am not good at but still play any way. I am not good
          at Dota 15000 hr play ranked archon*insert emoji here* Please carry me
        </div>
      </div>

      <div className="flex items-center justify-center  mt-10 justify-between">
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

          <div className="bg-fuchsia-500 border-2	border-stone-50 p-5">
            <div>Stanley the man ley</div>
            <Image
              src="/assets/gif/stanley.gif"
              width="300"
              height="300"
              alt={''}
            />
          </div>
        </div>

        <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 px-10">
          <div></div>
          <div>Insert Meme of the Day here</div>
        </div>

        <div className="bg-fuchsia-500 border-2	border-stone-50 p-5 px-10">
          <div>Meme of the Day</div>
          <div>Insert Meme of the Day here</div>
        </div>
      </div>

      {/* <main className="flex items-center justify-center p-8">
        <div className="border-cyan-100 border-2 p-28 m-10"></div>

        <div className="border-cyan-100 border-2 p-28 m-10"></div>
      
      </main>

      <main className="flex items-center justify-center p-8">
        <div className="border-cyan-100 border-2 p-28 m-10"></div>

        <div className="border-cyan-100 border-2 p-28 m-10"></div>

      </main> */}
    </div>
  );
  {
    /* AGILE SOFTWARE DEVELOPMENT IS MY PASSION */
  }
}
