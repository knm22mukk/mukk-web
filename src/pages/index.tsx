import type { NextPage } from 'next';
import Footer from '@components/Footer';
import Header from '@components/Header';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Header />
      <hr />
      <h1 className='text-3xl font-bold text-indigo-500'>Hello world!</h1>
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
