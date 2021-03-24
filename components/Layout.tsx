
import React, { ReactNode } from 'react'
import Head from 'next/head'

import CursorCircle from './CursorCircle/CursorCircle'
import Main from './Main/Main'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Masato Arai - Web App Developer' }: Props) => (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Masato Arai - Web App Developer" />

        <meta name="image" content="https://m-a-s.info/static/images/home.jpg" />

        <meta name="og:title" content="Masato Arai" />
        <meta name="og:description" content="Masato Arai - Web App Developer" />
        <meta name="og:image" content="https://m-a-s.info/static/images/home.jpg" />
        <meta name="og:url" content="https://m-a-s.info" />
        <meta name="og:site_name" content="Masato Arai" />
        <meta name="og:locale" content="en_GB" />
        <meta name="og:type" content="website" />
      </Head>

      <Main>
        <CursorCircle />

        {children}
      </Main>
    </>
)

export default Layout
