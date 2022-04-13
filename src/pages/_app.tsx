import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
