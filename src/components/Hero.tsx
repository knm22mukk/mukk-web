import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

const Hero: VFC = () => {
  return (
    <div className='container'>
      <div className='flex flex-col md:items-center lg:flex-row'>
        <div className='text-center lg:pr-12 lg:w-1/2 lg:text-left'>
          <h1 className='max-w-3xl text-3xl font-black leading-snug md:text-5xl'>
            Modern React Templates, Just For You
          </h1>
          <p className='my-5 mx-auto max-w-lg text-sm font-medium text-gray-600 dark:text-white lg:my-8 lg:mx-0 lg:text-base'>
            Our templates are easy to setup, understand and customize. Fully modular components with
            a variety of pages and components.
          </p>
          <div className='flex flex-col justify-center items-center mt-8 sm:flex-row lg:justify-start'>
            <Link href='/blog'>
              <a className='btn'>ブログ一覧へ</a>
            </Link>
          </div>
        </div>
        <Image
          src='/images/heroimage.png'
          alt='HeroImage'
          width={400}
          height={400}
          objectFit='cover'
          className='mx-auto'
        />
      </div>
    </div>
  );
};

export default Hero;
