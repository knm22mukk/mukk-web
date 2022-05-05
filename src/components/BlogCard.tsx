import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
  return (
    <Link href='/'>
      <a>
        <div className='mx-auto max-w-sm'>
          <div className='mb-5 hover:text-indigo-600 rounded-lg border border-gray-200 shadow-md transition duration-500 hover:scale-105'>
            <Image src='/images/logo300x300.png' width={384} height={300} alt='BlogImage' />
            <div className='p-5'>
              <div className='mt-4 text-xs italic font-semibold text-gray-600 dark:text-white uppercase'>
                april 4, 2022
              </div>
              <h4 className='mt-5 text-2xl font-black hover:text-indigo-600 transition duration-300'>
                〇〇から発売された新商品をご紹介します
              </h4>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
