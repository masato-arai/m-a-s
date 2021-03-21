import { GetStaticProps } from 'next'

import apollo from '../lib/apollo-client'
import GET_HOME_DATA from '../graphql/query/get-home-data'

import DataNotFound from '../components/DataNotFound'
import Layout from '../components/Layout'
import Canvas from '../components/Canvas'

interface HomeProps {
  data: object;
}

const Home = ({ data }) => {
  if (!data) return <DataNotFound />

  return (
    <Layout title="Masato Arai - Web App Developer">
      <Canvas />

      {data.heading && (
        <h1>{data.heading}</h1>
      )}

      {data.description && (
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      )}

      {data.contact && (
        <div dangerouslySetInnerHTML={{ __html: data.contact }} />
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const client = await apollo.getClient(context.preview);
  const { data } = await client.query({ query: GET_HOME_DATA });

  return {
    props: {
      data: data.home,
    },
  }
}

export default Home
