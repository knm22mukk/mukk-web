import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import SectionHeader from './SectionHeader';

const ToContact: VFC = () => {
  return (
    <section className='container py-8'>
      <div className='px-3 bg-white dark:bg-gray-600 rounded-lg border shadow-lg'>
        <div className='flex flex-col justify-between mx-auto md:flex-row'>
          <div className='flex shrink-0 items-center p-5 mx-auto w-full md:w-5/12'>
            <Image
              src='/images/mailImage.webp'
              width={400}
              height={400}
              alt='ContactUs'
              objectFit='cover'
            />
          </div>
          <div className='pb-8 mx-auto w-full max-w-md md:order-first md:py-16 md:mx-0 md:mr-12 md:max-w-none lg:mr-16 '>
            <div className='text-center md:px-4 md:text-left'>
              <SectionHeader
                subheading='CONTACT'
                title='お気軽にお問い合わせください'
                description='お問合せフォームよりご連絡いただいてから2、3日以内にご返信させていただきます。'
              />
              <div className='flex flex-col justify-center items-center mt-8 sm:flex-row'>
                <Link href='/contact'>
                  <a className='btn'>お問い合わせ</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToContact;
