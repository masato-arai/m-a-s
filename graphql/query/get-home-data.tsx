import { gql } from '@apollo/client'

const GET_HOME_DATA = gql`
  query Home {
    home {
      heading
      description(markdown: true)
      contact(markdown: true)
    }
  }
`

export default GET_HOME_DATA