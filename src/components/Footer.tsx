import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { headerNavLinks } from '@data/headerNavLinks';
import { siteMetaData } from '@data/siteMetaData';

const Footer: FC = () => {
  return (
    <div className='text-white bg-indigo-600 dark:bg-gray-700'>
      <div className='container py-20'>
        <div className='flex flex-col justify-center items-center px-8'>
          <div className='flex justify-center items-center'>
            <Link href='/' aria-label='back to home'>
              <a>
                <div className='flex justify-center items-center'>
                  <Image src='/images/logo200x200.png' width={90} height={90} alt='mukklogo' />
                  <div className='text-3xl font-black tracking-wide'>MUKK PACK</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex justify-center items-center mt-8 font-medium'>
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
            <a className='inline-block m-5 text-sm text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300'>
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
