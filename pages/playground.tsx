import styled from 'styled-components'

import Layout from '../components/Layout'
import Main from '../components/Main/Main'
import CursorCircle from '../components/CursorCircle/CursorCircle'
import Header from '../components/Header/Header'
import Wrapper from '../components/Wrapper'

import { colors } from '../styles/utils/colors'

const Playground = () => {
  return (
    <Layout title="Masato Arai - Playground">
      <Main>
        <CursorCircle />

        <Header />

        <Container>
          <Wrapper>
            <h1>Playground</h1>
          </Wrapper>
        </Container>
      </Main>
    </Layout>
  )
}

const Container = styled.div`
  color: ${colors.white};
`

export default Playground