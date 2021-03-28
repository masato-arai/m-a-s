import { gql } from '@apollo/client'

const GET_MAIN_NAV_DATA = gql`
  query MainNav {
    mainNav {
      playgroundVisible
    }
  }
`

export default GET_MAIN_NAV_DATA