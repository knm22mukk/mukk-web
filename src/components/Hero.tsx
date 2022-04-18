import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='container'>
      <div className='flex flex-col py-20 mx-auto max-w-screen-xl md:py-24 lg:flex-row lg:items-center'>
        <div className=' mx-auto max-w-lg text-center lg:w-5/12 lg:max-w-none lg:text-left'>
          <h1 className='text-3xl font-bold leading-tight md:text-3xl lg:text-4xl xl:text-5xl'>
            Information on
            <span className='text-indigo-500'> packaging materials</span>
          </h1>
          <p className='my-5 text-base lg:my-8 xl:text-lg'>
            包装資材営業マンのむっくが新商品や市場動向などを紹介する個人ブログサイトです。
          </p>
          <div className='flex justify-center lg:justify-start'>
            <div className='px-2'>
              <Link href='/blog'>
                <a>
                  <button className='btn'>Blog</button>
                </a>
              </Link>
            </div>
            <div className='px-2'>
              <Link href='/contact'>
                <a>
                  <button className='btn'>Contact</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 justify-center mt-12 lg:self-end lg:mt-0'>
          <div className='flex justify-center items-center lg:justify-end'>
            <Image
              src='/images/mukkblog_topimage_640x350.webp'
              alt='HeroImage'
              width={650}
              height={450}
              className=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
