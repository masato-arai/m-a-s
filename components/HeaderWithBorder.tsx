import styled from 'styled-components'

import { breakpoints } from '../styles/utils/breakpoints'
import { colors } from '../styles/utils/colors'
import { spaces } from '../styles/utils/spaces'
import { Wrapper } from '../styles/utils/wrappers'

const Header = () => (
  <Container>
    <StyledWrapper>
      <Border />
    </StyledWrapper>
  </Container>
)

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 28px;
  padding: ${spaces.medium} 0;
  position: relative;
  width: 100%;
  z-index: 100;

  @media ${breakpoints.laptop} {
    padding: ${spaces.large} 0;
  }
`

const StyledWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Border = styled.div`
  background-color: ${colors.white};
  height: 3px;
  width: 50%;
`

export default Header
