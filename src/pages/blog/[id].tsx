import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BreadCrumb from '@components/BreadCrumb';
import Date from '@components/Date';
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
      <SectionHeader title={article.title} description={article.description} />
      <p className='py-3 text-sm text-center'>
        <Date dateString={article.publishedAt} />
      </p>
      <div className='container py-8 lg:px-24'>
        <div className='mb-10'>
          <Image
            src={article.image.url}
            width={1200}
            height={720}
            alt={article.title}
            className='rounded-lg'
          />
        </div>
        <div
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
