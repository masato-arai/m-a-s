import Link from 'next/link'

import Layout from '../../components/Layout'
import Header from '../../components/Header/Header'

import { Wrapper } from '../../styles/utils/wrappers'

const Playground = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
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
        </Wrapper>
      </main>
    </Layout>
  )
}

export default Playground