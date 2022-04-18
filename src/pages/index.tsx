import type { NextPage } from 'next';
import Hero from '@components/Hero';
import ToContact from '@components/ToContact';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ToContact />
    </>
  );
};

export default Home;
