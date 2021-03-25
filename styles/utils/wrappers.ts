import styled from 'styled-components'

import { spaces } from './spaces'
import { breakpoints } from './breakpoints'

export const Wrapper = styled.div`
  padding: 0 ${spaces.medium};

  @media ${breakpoints.laptop} {
    padding: 0 ${spaces.large};
  }
`
