import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
  return (
    <Link href='/'>
      <a>
        <div className='mx-auto max-w-sm'>
          <div className='hover:text-indigo-600 rounded-lg border border-gray-200 shadow-md transition duration-500 hover:scale-105'>
            <div className='relative'>
              <Image
                src='/images/blog_banner384x216.webp'
                width={384}
                height={216}
                alt='BlogImage'
                className='rounded-t-lg hover:opacity-80'
              />
              <h5 className='absolute top-1/3 px-6 text-2xl font-bold text-white'>
                JAMスタックな包装資材ブログをつくってみた
              </h5>
            </div>
            <div className='p-5'>
              <div className='mt-4 text-xs italic font-semibold text-gray-600 dark:text-white uppercase'>
                april 4, 2022
              </div>
              <p className='mt-5 text-xl font-black hover:text-indigo-600'>
                〇〇から発売された新商品をご紹介します
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
