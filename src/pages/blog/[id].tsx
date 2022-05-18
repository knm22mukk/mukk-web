import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from '@components/Layout';
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
      <h1>{article.title}</h1>
      <p>{article.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.body}`,
        }}
      />
    </Layout>
  );
};

export default BlogId;
