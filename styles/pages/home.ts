import styled from 'styled-components'

import { breakpoints } from '../utils/breakpoints'
import { colors } from '../utils/colors'
import { heights } from '../utils/variables'
import { spaces } from '../utils/spaces'
import { Wrapper } from '../utils/wrappers'
import { TypoH1 } from '../utils/typography'

export const Container = styled.div`
  color: ${colors.white};
  height: calc(100% - ${heights.headerHeightMobile});
  position: relative;
  z-index: 1;

  @media ${breakpoints.laptop} {
    height: calc(100% - ${heights.headerHeight});
  }
`

export const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
  display: flex;
  height: 100%;
  justify-content: space-between;
`

export const Lead = styled.div`
  padding-top: ${spaces.small};
  width: 100%;

  @media ${breakpoints.laptop} {
    padding-top: ${spaces.large};
  }
`

export const StyledTypoH1 = styled(TypoH1)`
  margin: 0;
  width: 100%;

  @media ${breakpoints.laptop} {
    max-width: 40%;
  }
`

export const About = styled.div`
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

export const Description = styled.div`
  max-width: 420px;
`

export const Contact = styled.div`
  p:last-child {
    margin: 0;
  }
`
