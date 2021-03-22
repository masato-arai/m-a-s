import { createGlobalStyle } from 'styled-components'
import { breakpoints } from '../utils/breakpoints'
import { colors } from '../utils/colors'
import { spaces } from '../utils/spaces'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${colors.darkGrey};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 19px;
    margin: 0;

    @media ${breakpoints.desktop} {
      font-size: 16px;
    }
  }

  body > div:first-of-type,
  #__next {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    line-height: 1.4;
  }

  p {
    line-height: 1.6;
    margin: 0 0 ${spaces.medium} 0;
  }

  a {
    color: inherit;
    position: relative;
    transition: all 0.1s;

    &:hover {
      text-decoration: none;
    }
  }
`
