import { gql } from '@apollo/client'

const GET_HOME_DATA = gql`
  query Home {
    home {
      heading
    }
  }
`

export default GET_HOME_DATA