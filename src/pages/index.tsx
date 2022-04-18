import type { NextPage } from 'next';
import Hero from '@components/Hero';
import SectionHeader from '@components/SectionHeader';
import ToContact from '@components/ToContact';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SectionHeader
        subheading='BLOG'
        title='What kind of products do I introduce?'
        description='このブログサイトでどんな情報を発信するかご紹介します。'
      />
      <ToContact />
    </>
  );
};

export default Home;
