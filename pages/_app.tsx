import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { RecoilRoot } from 'recoil';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createTheme } from '@nextui-org/react';

// Bind Loading Events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/unredundant-blank.svg" />
            <link rel="icon" type="image/png" sizes="16x16" href="/unredundant-blank.svg" />
            <title>Unredundant</title>
          </Head>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </RecoilRoot>
  );
}

export default MyApp;
