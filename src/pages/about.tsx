import { NextPage } from 'next';
import Layout from '@components/Layout';
import SectionHeader from '@components/SectionHeader';

const about: NextPage = () => {
  return (
    <Layout>
      <SectionHeader
        subheading='ABOUT'
        title='Who Is MUKK?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
    </Layout>
  );
};

export default about;
