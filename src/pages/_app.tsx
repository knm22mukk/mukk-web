import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { GoogleAnalytics, usePageView } from '@libs/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
