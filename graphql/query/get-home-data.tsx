const GET_HOME_DATA = `
  query Home {
    home {
      heading
      description(markdown: true)
      contact(markdown: true)
    }
  }
`

export default GET_HOME_DATA