import type { NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import Features from '@components/Features';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';
import ToContact from '@components/ToContact';
import { client } from '@libs/client';
import type { Article } from 'types/blog';

export const getStaticProps = async () => {
  const article = await client.get({ endpoint: 'articles', queries: { limit: 3 } });

  return {
    props: {
      articles: article.contents,
    },
  };
};

type Props = {
  articles: Article[];
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <SEO pageTitle='MUKK PACK' />
      <Hero />
      <Features />
      <div className='container py-8'>
        <SectionHeader
          subheading='LATEST BLOG'
          title='最新記事'
          description='直近で更新した新しい記事です。他の記事も是非ご覧ください。'
        />
        <div className='grid gap-4 py-16 lg:grid-cols-3'>
          {articles.map((article) => (
            <BlogCard
              link={article.id}
              key={article.id}
              title={article.title}
              description={article.description}
              date={article.publishedAt}
            />
          ))}
        </div>
      </div>
      <ToContact />
    </Layout>
  );
};

export default Home;
