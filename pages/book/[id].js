import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Book() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/books/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Head>

        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />

      </Head>

      <div >
        <header className={utilStyles.header}>

          <img className={utilStyles.logo} src="/images/data-works-logo.svg" />

          <h1 className={utilStyles.h1}>Training Website</h1>
        </header>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <div>
        <img src={data.img} />
        <div>{data.name}</div>
        <div>{data.author}</div>
      </div>

    </div>
  )
}
