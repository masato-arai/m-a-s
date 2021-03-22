// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'

import apollo from '../lib/apollo-client'
import { GlobalStyle } from '../styles/base/global-style'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <GlobalStyle />

      <ApolloProvider client={apollo.getClient()}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp