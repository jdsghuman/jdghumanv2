import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@components/Layout'
import Script from 'next/script'
import Router from 'next/router'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        id="ga-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Head>
        {/*Global meta tags*/}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
