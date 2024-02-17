import Image from 'next/image';
import Navbar from './component/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex pt-52 flex-col items-center justify-between">
      <div>
        <div className="xl:text-[100px] lg:text-[60px] sm:text-[40px] text-[38px] text-center font-bold	pb-4">
          Hi! <span>I'm Shrijal Tamrakar.</span>
        </div>
        <div className="xl:text-[50px] lg:text-[40px] text-[25px] text-center ">Software Engineer</div>

        <div className='gap-4 flex justify-center pt-20'>
          <Link target="_blank" href="https://github.com/shrijaltamrakar" className='lg:text-[16px] text-[12px] underline'>GITHUB</Link> 
          <Link target="_blank" href="https://www.linkedin.com/in/shrijaltamrakar/" className='lg:text-[16px] text-[12px] underline'> LINKEDIN</Link> 
          <Link target="_blank" href="https://www.instagram.com/shrijal.tamrakar/" className='lg:text-[16px] text-[12px] underline'>INSTAGRAM</Link> 
          <Link target="_blank" href="https://dev.to/shrijaltamrakar" className='lg:text-[16px] text-[12px] underline'>BLOG</Link>
        </div>
      </div>
    </main>
  );
}
