'use client';

import { useState, useEffect } from 'react';

export default function Meme() {
  return (
    <div className='p-20'>
      <marquee className="text-5xl"> Welcome Here</marquee>
      <marquee className="text-5xl" direction="right"> This was the best!!!!!!!!!!!!</marquee>

      <main className="flex items-center justify-center p-8">
        <div className="border-cyan-100 border-2 p-28 m-10"></div>

        <div className="border-cyan-100 border-2 p-28 m-10"></div>
      
      </main>

      <main className="flex items-center justify-center p-8">
        <div className="border-cyan-100 border-2 p-28 m-10"></div>

        <div className="border-cyan-100 border-2 p-28 m-10"></div>

      </main>
    </div>
  );
}
