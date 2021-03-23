// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'

import apollo from '../lib/apollo-client'
import { GlobalStyle } from '../styles/base/global-style'

import { useStore } from '../redux/store'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Normalize />
      <GlobalStyle />

      <Provider store={store}>
        <ApolloProvider client={apollo.getClient()}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App