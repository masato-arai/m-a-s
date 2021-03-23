import { GetStaticProps } from 'next'
import styled from 'styled-components'

import apollo from '../lib/apollo-client'
import GET_HOME_DATA from '../graphql/query/get-home-data'

import DataNotFound from '../components/DataNotFound'
import Layout from '../components/Layout'
import Canvas from '../components/Canvas'
import Main from '../components/Main/Main'
import CursorCircle from '../components/CursorCircle/CursorCircle'
import HeaderWithBorder from '../components/HeaderWithBorder'
import Wrapper from '../components/Wrapper'

import { breakpoints } from '../styles/utils/breakpoints'
import { colors } from '../styles/utils/colors'
import { heights } from '../styles/utils/variables'
import { spaces } from '../styles/utils/spaces'
import { TypoH1 } from '../styles/utils/typography'

interface HomeProps {
  data: object;
}

const Home = ({ data }) => {
  if (!data) return <DataNotFound />

  return (
    <Layout title="Masato Arai - Web App Developer">
      <Canvas />
      <Main>
        <CursorCircle />
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
      </Main>
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

const Container = styled.div`
  color: ${colors.white};
  height: calc(100% - ${heights.headerHeightMobile});
  position: relative;
  z-index: 1;

  @media ${breakpoints.laptop} {
    height: calc(100% - ${heights.headerHeight});
  }
`

const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
  display: flex;
  height: 100%;
  justify-content: space-between;
`

const Lead = styled.div`
  padding-top: ${spaces.small};
  width: 100%;

  @media ${breakpoints.laptop} {
    padding-top: ${spaces.large};
  }
`

const StyledTypoH1 = styled(TypoH1)`
  margin: 0;
  width: 100%;

  @media ${breakpoints.laptop} {
    max-width: 40%;
  }
`

const About = styled.div`
  padding: ${spaces.medium} 0;
  width: 100%;

  a {
    border-bottom: 1px solid transparent;
    display: inline-block;
    line-height: 1;
    text-decoration: none;

    &:hover {
      border-bottom-color: ${colors.white};
    }
  }

  @media ${breakpoints.laptop} {
    padding: ${spaces.large} 0;
  }
`

const Description = styled.div`
  max-width: 420px;
`

const Contact = styled.div`
  p:last-child {
    margin: 0;
  }
`

export default Home
