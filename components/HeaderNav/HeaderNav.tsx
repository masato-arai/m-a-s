import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '../../styles/utils/colors'
import { TypoNavLink } from '../../styles/utils/typography'

const HeaderNav = () => (
  <Nav>
    <Link href="/playground" passHref>
      <TypoNavLink>
        Playground
      </TypoNavLink>
    </Link>
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  color: ${colors.white};
`

export default HeaderNav
