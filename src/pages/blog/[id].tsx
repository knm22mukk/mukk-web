import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import BreadCrumb from '@components/BreadCrumb';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';
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
      <SEO pageTitle={`MUKK PAKK || ${article.title}`} pageDescription={article.description} />
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
      <SectionHeader title={article.title} description={article.description} />
      <p className='py-3 text-sm text-center'>{article.publishedAt}</p>
      <div className='container py-8 lg:px-24'>
        <article
          dangerouslySetInnerHTML={{
            __html: `${article.body}`,
          }}
          className='max-w-none prose dark:prose-invert'
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
