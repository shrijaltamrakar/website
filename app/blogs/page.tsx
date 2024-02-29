import matter from 'gray-matter';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
type Repo = {
  name: string
  stargazers_count: number
}
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import fs from 'fs';

const getData = async () => { 
   console.log("Asdasdasd");

  try {
    const files = fs.readdirSync('public/blogs');

    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`public/blogs/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      console.log("slug", frontmatter)

      return {
        slug,
        frontmatter
      };
    });

    return {
      props: { posts }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };
  }
};

export default function Blog() {

  getData()
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="border-cyan-100 border-2 flex sm:flex-row flex-col gap-10">
        {/* <div className="border-cyan-100 border-2 flex-grow-1 sm:w-[35%] p-10 flex flex-col justify-center item-center">
          <div>
            <Image
              src="/assets/icons/dev.png"
              alt="Dev"
              className="rounded-full border-2"
              width={200}
              height={200}
            />
          </div>

          <div>
            <div className="text-center text-sm text-wrap">
              Hi, I am Shrijal Tamrakar. I am Software Engineer currently
              working at Fetch.ly.When I'm not working or developing, you'll find me in Swyambhu,
              Kathmandu. I love to travel, play Dota 2 and Valorant poorly, as
              well as
            </div>
          </div>
        </div> */}
        <div className="border-cyan-100 border-2 flex-grow-2 sm:w-[65%]">
          <p>Blogs</p>
          <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
          </ul>
        </div>

        <div className="border-cyan-100 border-2 flex-grow-1 sm:w-[35%] p-10 flex flex-col justify-center item-center">
          <div>
            <Image
              src="/assets/icons/dev.png"
              alt="Dev"
              className="rounded-full border-2"
              width={200}
              height={200}
            />
          </div>

          <div>
            <div className="text-center text-sm text-wrap">
              Hi, I am Shrijal Tamrakar. I am Software Engineer currently
              working at Fetch.ly.When I'm not working or developing, you'll find me in Swyambhu,
              Kathmandu. I love to travel, play Dota 2 and Valorant poorly, as
              well as
            </div>
          </div>
        </div> 
      </div>
    </main>
  );
}

// Blog.getStaticProps = () => { 
//    console.log("Asdasdasd");

//   try {
//     const files = fs.readdirSync('public/posts');

//     const posts = files.map((fileName) => {
//       const slug = fileName.replace('.md', '');
//       const readFile = fs.readFileSync(`public/blogs/${fileName}`, 'utf-8');
//       const { data: frontmatter } = matter(readFile);

//       return {
//         slug,
//         frontmatter
//       };
//     });

//     return {
//       props: { posts }
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       props: {}
//     };
//   }
// };
