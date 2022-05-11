import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import ChangeThemeButton from '@components/ChangeThemeButton';
import MobileNav from '@components/MobileNav';
import { headerNavLinks } from '@data/headerNavLinks';

const Header: VFC = () => {
  return (
    <header className='flex justify-around items-center py-4 mx-auto border-b-2'>
      <Link href='/' aria-label='むっく||ホームへ'>
        <a className='hover:text-indigo-600 hover:opacity-80'>
          <div className='flex justify-between items-center'>
            <Image
              src='/images/logo70x70.webp'
              width={70}
              height={70}
              alt='mukklogo'
              className='rounded-full'
            />
            <div className='text-3xl font-black tracking-wide'>MUKK PACK</div>
          </div>
        </a>
      </Link>
      <div className='flex justify-center items-center'>
        <div className='hidden md:block'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className='p-3 font-bold  hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 duration-300'>
                {link.title}
              </a>
            </Link>
          ))}
        </div>
        <MobileNav />
        <ChangeThemeButton />
      </div>
    </header>
  );
};

export default Header;
