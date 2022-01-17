import React, { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@components/Layout'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { defaultMetaTags } from '@components/Util/Constants'
import * as gtag from '@components/lib/gtag'

const isProduction = process.env.NODE_ENV === 'production'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <Layout metaTags={defaultMetaTags}>
      <Head>
        {/*Global meta tags*/}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
