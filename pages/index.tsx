import { GetStaticProps } from 'next'

import apollo from '../lib/apollo-client'
import GET_HOME_DATA from '../graphql/query/get-home-data'

import DataNotFound from '../components/DataNotFound'
import Layout from '../components/Layout'
import Canvas from '../components/Canvas'
import HeaderWithBorder from '../components/HeaderWithBorder/HeaderWithBorder'

import {
  About,
  Contact,
  Container,
  Description,
  Lead,
  StyledWrapper,
  StyledTypoH1,
} from '../styles/pages/home'

interface HomeProps {
  data: object;
}

const Home = ({ data }) => {
  if (!data) return <DataNotFound />

  return (
    <Layout title="Masato Arai - iOS / Web App Developer">
      <Canvas />
      <HeaderWithBorder />

      <Container>
        <StyledWrapper>
          <Lead>
            {data.heading && (
              <StyledTypoH1>{data.heading}</StyledTypoH1>
            )}
          </Lead>

          <About>
            {data.description && (
              <Description dangerouslySetInnerHTML={{ __html: data.description }} />
            )}

            {data.contact && (
              <Contact dangerouslySetInnerHTML={{ __html: data.contact }} />
            )}
          </About>
        </StyledWrapper>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const client = await apollo.getClient(context.preview)
  const { data } = await client.query({ query: GET_HOME_DATA })

  return {
    props: {
      data: data.home,
    },
  }
}

export default Home
