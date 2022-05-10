import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { headerNavLinks } from '@data/headerNavLinks';
import { siteMetaData } from '@data/siteMetaData';

const Footer: VFC = () => {
  return (
    <div className='text-white bg-indigo-600 dark:bg-gray-600'>
      <div className='py-20 mx-auto max-w-screen-xl lg:py-24'>
        <div className='flex flex-col justify-center items-center px-8'>
          <div className='flex justify-center items-center md:justify-start'>
            <Link href='/' aria-label='むっく||ホームへ'>
              <a>
                <div className='flex justify-between items-center'>
                  <Image
                    src='/images/logo300x300.png'
                    width={70}
                    height={70}
                    alt='mukklogo'
                    className='rounded-full'
                  />
                  <div className='text-3xl font-black tracking-wide'>MUKK PACK</div>
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
              aria-label='twitterへのリンク'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block pb-1 mx-4 text-xl text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'
            >
              <FaTwitter />
            </a>
            <a
              href={siteMetaData.facebook}
              aria-label='facebookへのリンク'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block pb-1 mx-4 text-xl text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'
            >
              <FaFacebook />
            </a>
            <a
              href={siteMetaData.instagram}
              aria-label='instagramへのリンク'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block pb-1 mx-4 text-xl text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'
            >
              <FaInstagram />
            </a>
          </div>
          <Link href='/privacypolicy'>
            <a className='inline-block pb-1 mx-4 mt-5 text-sm text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'>
              PRIVACY POLICY
            </a>
          </Link>
          <p className='mt-5 text-sm font-medium tracking-wide text-center'>
            &copy; Copyright 2022, MUKK PACK. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
