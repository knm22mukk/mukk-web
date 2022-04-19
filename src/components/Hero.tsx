import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

const Hero: VFC = () => {
  return (
    <div className='container relative'>
      <div className='flex flex-col py-20 mx-auto max-w-screen-xl md:items-center md:py-24 lg:flex-row'>
        <div className='relative shrink-0 text-center lg:pr-12 lg:w-6/12 lg:text-left'>
          <h1 className='max-w-3xl text-3xl font-black leading-snug md:text-5xl'>
            Modern React Templates, Just For You
          </h1>
          <p className='my-5 mx-auto max-w-lg text-sm font-medium text-gray-600 dark:text-white lg:my-8 lg:mx-0 lg:text-base'>
            Our templates are easy to setup, understand and customize. Fully modular components with
            a variety of pages and components.
          </p>
          <div className='flex flex-col justify-center items-center mt-8 sm:flex-row lg:justify-start'>
            <Link href='/blog'>
              <a>
                <button className='btn'>ブログ一覧へ</button>
              </a>
            </Link>
          </div>
        </div>
        <div className='flex relative flex-col justify-center mt-12 lg:mt-0'>
          <div className='flex relative justify-center items-center max-w-3xl md:justify-end lg:max-w-none'>
            <Image
              src='/images/mukkblog_topimage_640x350.webp'
              alt='HeroImage'
              width={640}
              height={350}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
