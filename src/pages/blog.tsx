import { NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import SectionHeader from '@components/SectionHeader';

const blog: NextPage = () => {
  return (
    <div>
      <SectionHeader
        subheading='BLOG'
        title='What kind of products do I introduce?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
      <div className='container'>
        <div className='grid gap-x-4 py-16 sm:grid-cols-2 lg:grid-cols-3'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default blog;
