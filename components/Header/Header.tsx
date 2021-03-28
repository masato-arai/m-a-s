import Link from 'next/link'
import styled from 'styled-components'

import { breakpoints } from '../../styles/utils/breakpoints'
import { spaces } from '../../styles/utils/spaces'
import { TypoNavLink } from '../../styles/utils/typography'
import { Wrapper } from '../../styles/utils/wrappers'

import HeaderNav from '../HeaderNav/HeaderNav'

const Header = () => (
  <Container>
    <StyledWrapper>
      <Link href="/" passHref>
        <TypoNavLink>
          Masato Arai
        </TypoNavLink>
      </Link>

      <HeaderNav />
    </StyledWrapper>
  </Container>
)

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${spaces.medium} 0;
  position: relative;
  width: 100%;
  z-index: 100;

  @media ${breakpoints.laptop} {
    padding: ${spaces.large} 0;
  }
`

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export default Header