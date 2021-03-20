import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import client from '../lib/apollo-client'
import GET_HOME_DATA from '../graphql/query/get-home-data'

interface HomeProps {
  heading: string;
}

const Home = props => {
  return (
    <Layout title="Masato Arai | Web App Developer">
      <h1>{props.heading}</h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await client.query({ query: GET_HOME_DATA })

  return {
    props: {
      heading: data.home.heading,
    },
  }
}

export default Home
