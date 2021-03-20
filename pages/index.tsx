import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import { request } from '../lib/datocms'

import GET_HOME_DATA from '../graphql/query/get-home-data'
import DataNotFound from '../components/DataNotFound'

interface HomeProps {
  data: object;
}

const Home = ({ data }) => {
  if (!data) return <DataNotFound />

  return (
    <Layout title="Masato Arai - Web App Developer">
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
  const data = await request({
    query: GET_HOME_DATA,
    preview: context.preview,
  })

  return {
    props: {
      data: data.home,
    },
  }
}

export default Home
