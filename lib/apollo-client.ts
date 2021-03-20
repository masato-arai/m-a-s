import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com',
})

const authLink = setContext((_, { headers, preview }) => {
  console.log('preview', preview);

  return {
    headers: {
      ...headers,
      contentType: 'application/json',
      authorization: `Bearer ${process.env.NEXT_DATOCMS_PRODUCTION_API_TOKEN}`,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
