import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>MUKK PACK || ページが見つかりませんでした</title>
      </Head>
      <div className='container flex justify-center items-center w-screen h-screen'>
        <div className='flex flex-col items-center'>
          <Image src='/images/404image.png' alt='404' width={600} height={400} />
          <h3 className='my-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
            おっと! <span className='text-red-500'>ページが見つかりませんでした！</span>
          </h3>
          <p className='mb-8 text-center text-gray-500 md:text-lg'>
            The page youre looking for doesnt exist.
          </p>
          <Link href='/'>
            <a className='p-2 btn'>ホームに戻る</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
