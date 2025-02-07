/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'


export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - Wordix'
  },
  description: 'Wordix: the Next.js site builder',
  applicationName: 'Wordix',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Wordix'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://wordix.so'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Wordix</b>{' '}
          <span style={{ opacity: '60%' }}>AI document flow</span>
        </div>
      }
      // Next.js discord server
      // chatLink="https://discord.gg/hEM84NMkRv"
      projectLink="https://github.com/sparrow-js/wordix"
    />
  )

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={<Footer>{new Date().getFullYear()} © Wordix.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/sparrow-js/wordix/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
