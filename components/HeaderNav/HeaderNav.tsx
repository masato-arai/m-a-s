import Link from 'next/link'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { colors } from '../../styles/utils/colors'
import { TypoNavLink } from '../../styles/utils/typography'

interface AppState {
  app: App,
}

interface App {
  playgroundVisible: boolean;
}

const HeaderNav = () => {
  const app = useSelector((state: AppState) => {
    return {
      playgroundVisible: state.app.playgroundVisible,
    }
  })

  return (
    <Nav>
      {app.playgroundVisible && (
        <Link href="/playground" passHref>
          <TypoNavLink>
            Playground
          </TypoNavLink>
        </Link>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  color: ${colors.white};
`

export default HeaderNav