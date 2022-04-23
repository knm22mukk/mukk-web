import { NextPage } from 'next';
import Link from 'next/link';

const Custom404: NextPage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-pink-400'>
      <div className='container'>
        <div className='py-20 bg-white rounded-md shadow-xl'>
          <div className='flex flex-col items-center'>
            <h1 className='text-9xl font-bold text-blue-600'>404</h1>
            <h3 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              おっと! <span className='text-red-500'>ページが見つかりませんでした！</span>
            </h3>
            <p className='mb-8 text-center text-gray-500 md:text-lg'>
              The page youre looking for doesnt exist.
            </p>
            <Link href='/'>
              <a className='p-2'>
                <button className='btn'>ホームに戻る</button>
              </a>
            </Link>
            <Link href='/contact'>
              <a className='p-2'>
                <button className='btn'>お問い合わせ</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
