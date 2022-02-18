import Header from '../components/Header';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className='min-h-screen bg-gray-100 pb-5'>
        <Head></Head>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </SessionProvider>
  );
}

export default MyApp;
