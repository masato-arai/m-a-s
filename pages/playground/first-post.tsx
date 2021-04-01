import Layout from '../../components/Layout'
import Header from '../../components/Header/Header'

import { Wrapper } from '../../styles/utils/wrappers'

const Post = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
          <h1>Post: First Post</h1>
        </Wrapper>
      </main>
    </Layout>
  )
}

export default Post