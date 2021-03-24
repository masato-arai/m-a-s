import styled from 'styled-components'

import Layout from '../components/Layout'
import Header from '../components/Header/Header'
import Wrapper from '../components/Wrapper'

import { colors } from '../styles/utils/colors'

const Playground = () => {
  return (
    <Layout title="Masato Arai - Playground">
      <Header />

      <Container>
        <Wrapper>
          <h1>Playground</h1>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  color: ${colors.white};
`

export default Playground