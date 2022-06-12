import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

const Hero: VFC = () => {
  return (
    <section className='container py-8'>
      <div className='flex flex-col md:items-center lg:flex-row'>
        <div className='text-center lg:pr-12 lg:w-7/12 lg:text-left'>
          <h1 className='max-w-3xl text-3xl font-black leading-snug md:text-5xl'>
            むっくの包装資材ブログ
          </h1>
          <p className='my-5 mx-auto max-w-lg text-sm font-medium text-gray-600 dark:text-white lg:my-8 lg:mx-0 lg:text-base'>
            このサイトは包装資材営業マンのむっくが包装資材、梱包資材に関する情報を発信する個人ブログサイトです
          </p>
          <div className='flex flex-col justify-center items-center mt-8 sm:flex-row lg:justify-start'>
            <Link href='/blog'>
              <a className='btn'>ブログ一覧へ</a>
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-center mt-12 lg:mt-0'>
          <div className='flex justify-center items-center max-w-3xl md:justify-end lg:max-w-none'>
            <Image
              src='/images/TopPageImage.webp'
              alt='HeroImage'
              width={500}
              height={430}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
