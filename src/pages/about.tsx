import { NextPage } from 'next';
import AboutMe from '@components/AboutMe';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';

const about: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='MUKK PACK || 自己紹介'
        pageDescription='包装資材営業マンむっくの自己紹介ページ。簡単に自己紹介させていただきます。SNSのフォローもお願いします。'
      />
      <SectionHeader
        subheading='ABOUT'
        title='Who Is MUKK?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
      <AboutMe />
    </Layout>
  );
};

export default about;
