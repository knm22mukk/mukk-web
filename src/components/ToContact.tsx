import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import SectionHeader from './SectionHeader';

const ToContact: VFC = () => {
  return (
    <div className='container py-10 my-10'>
      <div className='flex flex-col justify-between mx-auto max-w-screen-xl md:flex-row'>
        <div className='flex shrink-0 items-center my-5 mx-auto w-full max-w-md h-80 md:mx-0 md:w-5/12 md:max-w-none md:h-auto'>
          <Image
            src='/images/contactus.png'
            width={600}
            height={400}
            alt='ContactUs'
            className='rounded-lg'
          />
        </div>
        <div className='mx-auto w-full max-w-md md:order-first md:mx-0 md:mr-12 md:max-w-none lg:mr-16'>
          <div className='text-center md:text-left'>
            <SectionHeader
              subheading='CONTACT'
              title='お気軽にお問い合わせください'
              description='お問合せフォームよりご連絡いただいてから2、3日以内にご返信させていただきます。'
            />
            <div className='flex flex-col justify-center items-center mt-8 sm:flex-row'>
              <Link href='/contact'>
                <a>
                  <button className='btn'>お問い合わせ</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToContact;
