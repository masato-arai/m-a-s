import { GetStaticProps } from 'next';

import Layout from '../components/Layout'
import { gql } from '@apollo/client';
import client from '../lib/apollo-client';

const HOMEPAGE_QUERY = gql`
  query Home {
    home {
      heading
    }
  }
`

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
  const { data } = await client.query({ query: HOMEPAGE_QUERY });

  return {
    props: {
      heading: data.home.heading,
    },
  };
}

export default Home
