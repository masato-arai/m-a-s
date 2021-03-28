import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Header from '../../components/Header/Header'

const Playground = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Header />

      <h1>Playground</h1>
      <ul>
        <li>
          <Link href="/playground/[id]" as={`/playground/first-post`}>
            <a>First post</a>
          </Link>
        </li>
        <li>
          <Link href="/playground/[id]" as={`/playground/second-post`}>
            <a>Second post</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Playground