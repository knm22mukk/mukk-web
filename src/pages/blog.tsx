import { NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';

const blog: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='MUKK PACK || ブログ記事一覧'
        pageDescription='包装資材営業マンむっくのブログ記事一覧ページです。包装資材に関する商品情報、市場情報を発信します。'
      />
      <SectionHeader
        subheading='BLOG'
        title='What kind of products do I introduce?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
      <div className='container'>
        <div className='grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </Layout>
  );
};

export default blog;
