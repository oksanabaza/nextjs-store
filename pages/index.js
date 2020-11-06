import useSWR from 'swr'
import Book from '../components/Book'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/books', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className={utilStyles.main_container}>
        <header className={utilStyles.header}>

          <img className={utilStyles.logo} src="/images/data-works-logo.svg" />

          <h1 className={utilStyles.h1}>Training Website</h1>
        </header>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.main}>

            <div className={utilStyles.catalog}>
              <div className={utilStyles.Books}>Books</div>
              <div className={utilStyles.categories}>
                <Link href="/classics">
                  <a>Classics</a>
                </Link>
                <Link href="/philosophy">
                  <a>Philosophy</a>
                </Link>
                <Link href="/romance">
                  <a>Romance</a>
                </Link>
              </div>
            </div>
            <ul className={utilStyles.list}>
              {data.map((b, i, src, author) => (
                <Book key={i} book={b} image={src} author={author} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
