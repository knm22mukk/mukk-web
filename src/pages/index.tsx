import type { NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import Features from '@components/Features';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';
import ToContact from '@components/ToContact';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO pageTitle='MUKK PACK' />
      <Hero />
      <Features />
      <div className='container'>
        <SectionHeader
          subheading='BLOG'
          title='What kind of products do I introduce?'
          description='このブログサイトでどんな情報を発信するかご紹介します'
        />
        <div className='grid gap-4 py-16 lg:grid-cols-3'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <ToContact />
    </Layout>
  );
};

export default Home;
