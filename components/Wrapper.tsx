import styled from 'styled-components'
import { spaces } from '../styles/utils/spaces'
import { breakpoints } from '../styles/utils/breakpoints'

const Wrapper = styled.div`
  padding: 0 ${spaces.medium};

  @media ${breakpoints.laptop} {
    padding: 0 ${spaces.large};
  }
`

export default Wrapper