import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='container py-8'>
      <div className='flex flex-col md:items-center lg:flex-row'>
        <div className='text-center lg:pr-8 lg:w-7/12 lg:text-left'>
          <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-indigo-500'>
            むっくの包装資材ブログ
          </h1>
          <p className='my-5 text-sm font-medium text-gray-600 dark:text-white'>
            このサイトは包装資材営業マンのむっくが包装資材、梱包資材に関する情報を発信する個人ブログサイトです
          </p>
          <div className='flex flex-col justify-center items-center mt-8 sm:flex-row lg:justify-start'>
            <Link href='/blog/page/1'>
              <a className='btn'>ブログ一覧へ</a>
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-center mt-10 lg:mt-0'>
          <div className='flex justify-center items-center md:justify-end'>
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
