import { books } from '../../../data'

export default function bookHandler({ query: { id } }, res) {
  const filtered = books.filter((b) => b.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
