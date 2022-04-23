import { ReactNode } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='py-16'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
