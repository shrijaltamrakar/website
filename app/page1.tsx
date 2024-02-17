import Image from 'next/image';
import Navbar from './component/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="border border-cyan-100 ">
        <Navbar />

        <div className='flex justify-center flex-col items-center'>
          <h1>Shrijal Tamrakar</h1>
          <h1>Digital Craftsman</h1>

          <h1>Hello, I'm an Full Stack Engineer based in Nepal</h1>

          <div className='flex justify-center flex-col items-center'>
            Technology Stack
            <div className="flex flex-wrap justify-center gap-10 ">
              <Image
                src="/assets/image/node.png"
                width="80"
                height="80"
                alt="node"
              />
              <Image
                src="/assets/image/node.png"
                width="80"
                height="80"
                alt="node"
              />
              <Image
                src="/assets/image/node.png"
                width="80"
                height="80"
                alt="node"
              />
              <Image
                src="/assets/image/node.png"
                width="80"
                height="80"
                alt="node"
              />
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
