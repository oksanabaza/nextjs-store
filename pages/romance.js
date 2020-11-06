import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Category() {
  return (
    <div>
      <Head>
        {/* <title>{postData.title}</title> */}
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />

      </Head>
      <header className={utilStyles.header}>

        <img className={utilStyles.logo} src="/images/data-works-logo.svg" />

        <h1 className={utilStyles.h1}>Training Website</h1>
      </header>
      <div >
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <article>
        <h1>This is a page with Romance Category</h1>
      </article>
    </div>
  )
}