import styled from 'styled-components'

import { breakpoints } from './breakpoints'

export const TypoH1 = styled.h1`
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 1.6;

  @media ${breakpoints.laptop} {
    font-size: 32px;
  }
`

export const TypoNavLink = styled.a`
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.2;
  text-decoration: none;

  @media ${breakpoints.laptop} {
    font-size: 24px;
    letter-spacing: 1px;
  }
`