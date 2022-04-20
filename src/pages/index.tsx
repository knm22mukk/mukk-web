import type { NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import Features from '@components/Features';
import Hero from '@components/Hero';
import SectionHeader from '@components/SectionHeader';
import ToContact from '@components/ToContact';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className='container'>
        <SectionHeader
          subheading='BLOG'
          title='What kind of products do I introduce?'
          description='このブログサイトでどんな情報を発信するかご紹介します'
        />
        <div className='grid gap-x-4 py-16 sm:grid-cols-2 lg:grid-cols-3'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <ToContact />
    </>
  );
};

export default Home;
