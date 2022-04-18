import Link from 'next/link';
import { VFC } from 'react';

const ToContact: VFC = () => {
  return (
    <div className='container py-20 my-10'>
      <div className='relative py-20 bg-indigo-600 rounded-lg lg:py-24'>
        <div className='flex relative z-10 flex-col items-center px-8 mx-auto text-center lg:flex-row lg:text-left'>
          <div className='max-w-lg lg:w-1/2'>
            <h5 className='text-2xl font-bold text-gray-100 sm:text-3xl'>
              お気軽に
              <br />
              お問い合わせください
            </h5>
          </div>
          <div className='flex flex-col justify-center mt-6 sm:flex-row lg:justify-end lg:mt-0'>
            <Link href='/blog'>
              <a className='px-2'>
                <button className='hover:text-gray-200 hover:bg-red-600 shadow-lg btn'>Blog</button>
              </a>
            </Link>
            <Link href='/contact'>
              <a className='px-2'>
                <button className='hover:text-indigo-500 hover:bg-gray-100 shadow-lg btn'>
                  Contact
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToContact;
