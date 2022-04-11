import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { headerNavLinks } from '@data/headerNavLinks';
import { siteMetaData } from '@data/siteMetaData';

const Footer = () => {
  return (
    <div className='-mx-8 -mb-8 text-white bg-indigo-600'>
      <div className='py-20 mx-auto max-w-screen-xl lg:py-24'>
        <div className='flex flex-col justify-center items-center px-8'>
          <div className='flex justify-center items-center md:justify-start'>
            <Link href='/' area-label='むっく||ホームへ'>
              <a>
                <div className='flex justify-between items-center'>
                  <Image
                    src='/images/logo300x300.png'
                    width={70}
                    height={70}
                    alt='mukklogo'
                    className='rounded-full'
                  />
                  <div className='text-3xl font-black tracking-wide'>MUKK BLOG</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex flex-col flex-wrap justify-center items-center mt-8 font-medium sm:flex-row'>
            {headerNavLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <a className='pb-1 mx-4 mt-2 hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'>
                  {link.title}
                </a>
              </Link>
            ))}
          </div>
          <div className='mt-5'>
            <a
              href={siteMetaData.twitter}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block pb-1 mx-4 text-xl text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'
            >
              <FaTwitter />
            </a>
            <a
              href={siteMetaData.facebook}
              className='inline-block pb-1 mx-4 text-xl text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'
            >
              <FaFacebook />
            </a>
            <a
              href={siteMetaData.instagram}
              className='inline-block pb-1 mx-4 text-xl text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'
            >
              <FaInstagram />
            </a>
          </div>
          <p className='mt-10 text-sm font-medium tracking-wide text-center text-gray-300'>
            &copy; Copyright 2022, Mukk Blog. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
