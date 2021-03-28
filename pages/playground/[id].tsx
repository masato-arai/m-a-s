import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import Header from '../../components/Header/Header'

import { Wrapper } from '../../styles/utils/wrappers'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
          <div>
            <Link href="/playground" passHref>
              <a>Back to playground</a>
            </Link>
          </div>

          <h1>Post: {id}</h1>
        </Wrapper>
      </main>
    </Layout>
  )
}

export default Post