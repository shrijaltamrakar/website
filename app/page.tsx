import Image from 'next/image';
import Navbar from './component/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen pt-48">
      <div>
        <div className="xl:text-[100px] lg:text-[60px] sm:text-[40px] text-[38px] text-center font-bold	pb-4">
          Hi! <span>I'm Shrijal Tamrakar.</span>
        </div>
        <div className="xl:text-[50px] lg:text-[40px] text-[25px] text-center ">
          Software Engineer
        </div>

        <div className="flex gap-10 justify-center mt-10">
          <div>
            <Image
              src="/assets/image/node.png"
              width="80"
              height="50"
              alt="node"
            />
          </div>
          <div>
            <Image
              src="/assets/image/react.png"
              width="60"
              height="50"
              alt="react"
            />
          </div>

          <div>
            <Image
              src="/assets/image/react-native.png"
              width="50"
              height="50"
              alt="react-native"
            />
          </div>
          <div>
            <Image
              src="/assets/image/rails.png"
              width="60"
              height="50"
              alt="rails"
            />
          </div>
        </div>

        <div className="gap-4 flex justify-center pt-20">
          <Link
            target="_blank"
            href="https://github.com/shrijaltamrakar"
            className="lg:text-[16px] text-[12px] underline"
          >
            GITHUB
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/shrijaltamrakar/"
            className="lg:text-[16px] text-[12px] underline"
          >
            {' '}
            LINKEDIN
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/shrijal.tamrakar/"
            className="lg:text-[16px] text-[12px] underline"
          >
            INSTAGRAM
          </Link>
          <Link
            target="_blank"
            href="https://dev.to/shrijaltamrakar"
            className="lg:text-[16px] text-[12px] underline"
          >
            BLOG
          </Link>
        </div>
      </div>
    </main>
  );
}
