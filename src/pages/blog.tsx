import { NextPage } from 'next';
import BlogCard from '@components/BlogCard';
import BreadCrumb from '@components/BreadCrumb';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';
import { client } from '@libs/client';
import { Article, Category } from 'types/blog';

export const getStaticProps = async () => {
  const article = await client.get({ endpoint: 'articles' });
  const category = await client.get({ endpoint: 'categories' });

  return {
    props: {
      articles: article.contents,
      categories: category.contents,
    },
  };
};

type Props = {
  articles: Article[];
  categories: Category[];
};

const blog: NextPage<Props> = ({ articles, categories }) => {
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
            to: '/blog',
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
              imageSrc={article.image.url}
              link={article.id}
              key={article.id}
              title={article.title}
              description={article.description}
              date={article.publishedAt}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default blog;
