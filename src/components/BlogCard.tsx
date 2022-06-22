import Link from 'next/link';
import { FC } from 'react';
import BlogImage from '@components/BlogImage';
import Date from '@components/Date';

type Props = {
  link: string;
  imageSrc: string;
  title: string;
  description: string;
  date: string;
};

const BlogCard: FC<Props> = ({ link, imageSrc, title, description, date }) => {
  return (
    <Link href={`/blog/${link}`}>
      <a>
        <div className='mx-auto max-w-sm'>
          <div className='hover:text-indigo-600 rounded-lg border border-gray-200 shadow-md transition duration-300 hover:scale-105'>
            <BlogImage
              baseImageUrl={imageSrc}
              width={384}
              height={216}
              textSize={20}
              title={title}
              className='rounded-t-lg'
            />
            <div className='p-5'>
              <div className='mt-4 text-xs italic font-semibold text-gray-600 dark:text-white'>
                <Date dateString={date} />
              </div>
              <p className='mt-5 text-xl font-black hover:text-indigo-600'>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
