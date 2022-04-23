import { NextPage } from 'next';
import Layout from '@components/Layout';
import SectionHeader from '@components/SectionHeader';

const contact: NextPage = () => {
  return (
    <Layout>
      <SectionHeader
        subheading='CONTACT'
        title='What kind of products do I introduce?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
    </Layout>
  );
};

export default contact;
