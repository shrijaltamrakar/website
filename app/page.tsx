import Image from 'next/image';
import Navbar from './component/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen sm:pt-48 pt-36">
      <div>
        <div className="xl:text-[100px] lg:text-[60px] sm:text-[40px] text-[38px] text-center font-bold	pb-4">
          Hi! <span>I'm Shrijal Tamrakar.</span>
        </div>
        <div className="xl:text-[50px] lg:text-[40px] text-[25px] text-center ">
          Software Engineer
        </div>

        <div className="flex gap-10 justify-center mt-10 items-center">
          <div>
            <Image
              src="/assets/image/node.png"
              width="80"
              height="50"
              alt="node"
              className="sm:h-[50px] sm:w-[80px] h-[40px] w-[50px]"
            />
          </div>
          <div>
            <Image
              src="/assets/image/react.png"
              width="60"
              height="50"
              alt="react"
              className="sm:h-[55px] sm:w-[60px]  h-[40px] w-[40px]"
            />
          </div>

          <div>
            <Image
              src="/assets/image/react-native.png"
              width="50"
              height="50"
              alt="react-native"
              className="sm:h-[50px] sm:w-[50px] h-[35px] w-[32px]"
            />
          </div>
          <div>
            <Image
              src="/assets/image/rails.png"
              width="60"
              height="50"
              alt="rails"
              className="sm:h-[60px] sm:w-[60px] h-[35px] w-[35px]"
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

      <div className="absolute bottom-20 right-20 group transition duration-150 ease-out group-hover:ease-in">
        <div className="relative group-hover:hidden transition duration-150 ease-out group-hover:ease-in"></div>

        <div className="relative invisible group-hover:visible transition duration-150 ease-out group-hover:ease-in">
          <Link href="/memelious">
            <Image
              src="/assets/gif/morty.gif"
              height="150"
              width="150"
              alt="rick and morty"
              className="transition duration-150 ease-out group-hover:ease-in"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
