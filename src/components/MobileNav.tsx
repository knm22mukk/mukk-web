import Link from 'next/link';
import { useState, FC } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { headerNavLinks } from '@data/headerNavLinks';

const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='px-3 md:hidden'>
      <button
        aria-label='ToggleMenu'
        type='button'
        onClick={handleClick}
        className='flex items-center text-3xl'
      >
        {open ? <MdClose /> : <MdMenu />}
      </button>
      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-600 opacity-95 z-10 transform ease-in-out duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className='fixed py-10 w-full h-full'>
          {headerNavLinks.map((link) => (
            <div key={link.title} className='py-5'>
              <Link href={link.href}>
                <a
                  className='flex justify-center text-2xl font-bold tracking-wide hover:text-indigo-600'
                  onClick={handleClick}
                >
                  {link.title}
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
