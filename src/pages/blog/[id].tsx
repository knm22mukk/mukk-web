import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import BlogImage from '@components/BlogImage';
import BreadCrumb from '@components/BreadCrumb';
import Date from '@components/Date';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import ToContact from '@components/ToContact';
import { client } from '@libs/client';
import type { Article } from 'types/blog';

type Props = {
  article: Article;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'articles' });

  const paths = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params?.id;
  const data = await client.get({ endpoint: 'articles', contentId: id });
  return {
    props: {
      article: data,
    },
  };
};

const BlogId: NextPage<Props> = ({ article }) => {
  return (
    <Layout>
      <SEO
        pageTitle={`MUKK PAKK || ${article.title}`}
        pageDescription={article.description}
        pageImage={article.image.url}
      />
      <BreadCrumb
        lists={[
          {
            title: 'ブログ',
            to: '/blog',
          },
          {
            title: article.title,
            to: article.id,
          },
        ]}
      />

      <div className='container py-8 lg:px-24'>
        <BlogImage baseImageUrl={article.image.url} title={article.title} className='rounded-lg' />
        <p className='my-8 text-lg text-right text-gray-500 dark:text-white'>
          投稿日：
          <Date dateString={article.publishedAt} />
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${article.body}`,
          }}
          className='max-w-none prose dark:prose-invert article'
        />
      </div>
      <div className='flex justify-center mb-8'>
        <Link href='/blog'>
          <a className='btn'>一覧に戻る</a>
        </Link>
      </div>
      <ToContact />
    </Layout>
  );
};

export default BlogId;
