import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'


export default function Book({ book }) {
  console.log(book.author)
  return (
    <li className={utilStyles.listItem}>
      <img className={utilStyles.img} src={book.img} />
      <Link href="/book/[id]" as={`/book/${book.id}`}>
        <a className={utilStyles.book_title}>{book.name}</a>
      </Link>
      <div className={utilStyles.book_author}>{book.author}</div>
    </li>
  )
}
