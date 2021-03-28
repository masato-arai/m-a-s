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
          <ul>
            <li>
              <Link href="/playground/first-post" passHref>
                <a>First post</a>
              </Link>
            </li>
          </ul>
        </Wrapper>
      </main>
    </Layout>
  )
}

export default Playground