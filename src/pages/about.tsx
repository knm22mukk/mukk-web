import { NextPage } from 'next';
import AboutMe from '@components/AboutMe';
import BreadCrumb from '@components/BreadCrumb';
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
      <BreadCrumb
        lists={[
          {
            title: '自己紹介',
            to: '/about',
          },
        ]}
      />
      <SectionHeader
        subheading='ABOUT'
        title='包装資材営業マンむっくとは？'
        description='簡単に自己紹介をさせていただきます'
      />
      <AboutMe />
    </Layout>
  );
};

export default about;
