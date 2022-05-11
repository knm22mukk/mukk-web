import { ReactNode } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ReturnToTop from '@components/ReturnToTop';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='py-8'>
        {children}
        <ReturnToTop />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
