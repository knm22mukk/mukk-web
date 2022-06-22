import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import BreadCrumb from '@components/BreadCrumb';
import Layout from '@components/Layout';
import Pagination from '@components/Pagination';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';
import { client } from '@libs/client';
import { Article } from 'types/blog';

const PER_PAGE = 12;

export const getStaticPaths: GetStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await client.get({ endpoint: 'articles' });

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((i) => `/blog/page/${i}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const numId = Number(context.params?.id);
  const offset = (numId - 1) * PER_PAGE;
  const article = await client.get({
    endpoint: 'articles',
    queries: { offset: offset, limit: PER_PAGE },
  });

  return {
    props: {
      articles: article.contents,
      totalCount: article.totalCount,
      currentPageNumber: numId,
    },
  };
};

type Props = {
  articles: Article[];
  totalCount: number;
  currentPageNumber: number;
};

const BlogPageId: NextPage<Props> = ({ articles, totalCount, currentPageNumber }) => {
  return (
    <Layout>
      <SEO
        pageTitle='MUKK PACK || ブログ記事一覧'
        pageDescription='包装資材営業マンむっくのブログ記事一覧ページです。包装資材に関する商品情報、市場情報を発信します。'
      />
      <BreadCrumb
        lists={[
          {
            title: 'ブログ',
            to: '/blog/page/1',
          },
        ]}
      />
      <SectionHeader
        subheading='BLOG'
        title='包装資材の商品情報、市場情報を発信します'
        description='こまめにアップデートしますので是非チェックお願いします'
      />
      <div className='container'>
        <div className='grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3'>
          {articles.map((article) => (
            <BlogCard
              title={article.title}
              imageSrc={article.image.url}
              link={article.id}
              key={article.id}
              description={article.description}
              date={article.publishedAt}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPageNumber={currentPageNumber}
        maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
        PER_PAGE={PER_PAGE}
        totalCount={totalCount}
      />
    </Layout>
  );
};

export default BlogPageId;
